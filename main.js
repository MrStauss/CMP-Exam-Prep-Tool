// CMP Study Tool - Main Application Logic

class CMPStudyTool {
    constructor() {
        this.currentMode = 'dashboard';
        this.currentFlashcard = 0;
        this.currentQuestion = 0;
        this.currentScenario = 0;
        this.studyTimer = null;
        this.studyStartTime = null;
        this.totalStudyTime = 0;
        this.questionStats = { correct: 0, total: 0 };
        
        this.init();
    }

    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.initializeTypedText();
        this.initializeParticles();
        this.renderDashboard();
        this.updateGlobalProgress();
        this.startStudyTimer();
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('start-studying-btn').addEventListener('click', () => this.showStudySection());
        document.getElementById('take-assessment-btn').addEventListener('click', () => this.showAssessmentSection());
        
        // Study Mode Tabs
        document.querySelectorAll('.study-mode-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchStudyMode(e.target.dataset.mode));
        });
        
        // Flashcard Controls
        document.getElementById('flashcard-container').addEventListener('click', () => this.flipFlashcard());
        document.getElementById('flashcard-dont-know').addEventListener('click', () => this.rateFlashcard(0));
        document.getElementById('flashcard-review').addEventListener('click', () => this.rateFlashcard(1));
        document.getElementById('flashcard-know').addEventListener('click', () => this.rateFlashcard(2));
        document.getElementById('shuffle-flashcards').addEventListener('click', () => this.shuffleFlashcards());
        
        // Question Controls
        document.getElementById('start-questions-btn').addEventListener('click', () => this.startQuestions());
        
        // Scenario Controls
        document.getElementById('next-scenario-btn').addEventListener('click', () => this.nextScenario());
        
        // Assessment Controls
        document.getElementById('start-assessment-btn').addEventListener('click', () => this.startFullAssessment());
        document.getElementById('practice-assessment-btn').addEventListener('click', () => this.startPracticeAssessment());
        
        // Timer Control
        document.getElementById('study-timer-btn').addEventListener('click', () => this.toggleTimer());
        
        // Domain Filters
        this.setupDomainFilters();
    }

    setupDomainFilters() {
        const flashcardFilter = document.getElementById('flashcard-domain-filter');
        const questionsFilter = document.getElementById('questions-domain-filter');
        
        // Populate domain options
        Object.keys(cmpData.domains).forEach(domainKey => {
            const domain = cmpData.domains[domainKey];
            const option1 = new Option(`Domain ${domainKey} - ${domain.name}`, domainKey);
            const option2 = new Option(`Domain ${domainKey} - ${domain.name}`, domainKey);
            flashcardFilter.add(option1);
            questionsFilter.add(option2);
        });
        
        // Add event listeners
        flashcardFilter.addEventListener('change', () => this.filterFlashcards());
        questionsFilter.addEventListener('change', () => this.filterQuestions());
    }

    initializeTypedText() {
        const typedStrings = [
            "Comprehensive study tool for the Certified Meeting Professional exam",
            "Master all 12 domains with interactive flashcards and practice questions",
            "Track your progress and focus on high-weight exam areas",
            "Prepare with real-world scenarios and detailed explanations"
        ];
        
        new Typed('#typed-text', {
            strings: typedStrings,
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    initializeParticles() {
        // Create floating particles background
        const container = document.getElementById('particles-container');
        
        // Use p5.js for particle system
        const sketch = (p) => {
            let particles = [];
            
            p.setup = () => {
                const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
                canvas.parent(container);
                
                // Create particles
                for (let i = 0; i < 50; i++) {
                    particles.push({
                        x: p.random(p.width),
                        y: p.random(p.height),
                        vx: p.random(-0.5, 0.5),
                        vy: p.random(-0.5, 0.5),
                        size: p.random(2, 6),
                        opacity: p.random(0.1, 0.3)
                    });
                }
            };
            
            p.draw = () => {
                p.clear();
                
                particles.forEach(particle => {
                    // Update position
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    // Wrap around edges
                    if (particle.x < 0) particle.x = p.width;
                    if (particle.x > p.width) particle.x = 0;
                    if (particle.y < 0) particle.y = p.height;
                    if (particle.y > p.height) particle.y = 0;
                    
                    // Draw particle
                    p.fill(255, 255, 255, particle.opacity * 255);
                    p.noStroke();
                    p.circle(particle.x, particle.y, particle.size);
                });
                
                // Draw connections
                particles.forEach((particle, i) => {
                    particles.slice(i + 1).forEach(otherParticle => {
                        const distance = p.dist(particle.x, particle.y, otherParticle.x, otherParticle.y);
                        if (distance < 100) {
                            const alpha = p.map(distance, 0, 100, 0.1, 0);
                            p.stroke(255, 255, 255, alpha * 255);
                            p.strokeWeight(1);
                            p.line(particle.x, particle.y, otherParticle.x, otherParticle.y);
                        }
                    });
                });
            };
            
            p.windowResized = () => {
                p.resizeCanvas(container.offsetWidth, container.offsetHeight);
            };
        };
        
        new p5(sketch);
    }

    renderDashboard() {
        const grid = document.getElementById('domains-grid');
        grid.innerHTML = '';
        
        Object.keys(cmpData.domains).forEach(domainKey => {
            const domain = cmpData.domains[domainKey];
            const progress = studyProgress.domainProgress[domainKey];
            
            // Determine priority color
            let priorityColor = 'bg-green-500';
            if (domain.weight >= 20) priorityColor = 'bg-red-500';
            else if (domain.weight >= 7) priorityColor = 'bg-yellow-500';
            
            const card = document.createElement('div');
            card.className = 'domain-card rounded-xl p-6 shadow-lg cursor-pointer card-hover';
            card.innerHTML = `
                <div class="flex items-center justify-between mb-4">
                    <div class="text-sm font-semibold text-gray-600">Domain ${domainKey}</div>
                    <div class="w-3 h-3 ${priorityColor} rounded-full pulse-ring"></div>
                </div>
                <h3 class="text-lg font-semibold text-navy mb-2">${domain.name}</h3>
                <div class="text-sm text-gray-600 mb-4">
                    ${domain.weight}% of exam • ${domain.items} questions
                </div>
                <div class="mb-4">
                    <div class="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>${Math.round(progress.mastery)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-gold h-2 rounded-full transition-all duration-500" style="width: ${progress.mastery}%"></div>
                    </div>
                </div>
                <div class="flex justify-between text-xs text-gray-500">
                    <span>${progress.questionsCorrect}/${progress.questionsAnswered} correct</span>
                    <span>${this.formatTime(progress.timeSpent)} studied</span>
                </div>
            `;
            
            card.addEventListener('click', () => this.studyDomain(domainKey));
            grid.appendChild(card);
        });
    }

    studyDomain(domainKey) {
        this.showStudySection();
        // Filter to specific domain
        document.getElementById('flashcard-domain-filter').value = domainKey;
        document.getElementById('questions-domain-filter').value = domainKey;
        this.filterFlashcards();
        this.filterQuestions();
    }

    showStudySection() {
        this.currentMode = 'study';
        document.getElementById('dashboard-section').classList.add('hidden');
        document.getElementById('study-section').classList.remove('hidden');
        document.getElementById('assessment-section').classList.add('hidden');
        
        // Initialize first study mode
        this.switchStudyMode('flashcards');
    }

    showAssessmentSection() {
        this.currentMode = 'assessment';
        document.getElementById('dashboard-section').classList.add('hidden');
        document.getElementById('study-section').classList.add('hidden');
        document.getElementById('assessment-section').classList.remove('hidden');
    }

    switchStudyMode(mode) {
        // Update tab states
        document.querySelectorAll('.study-mode-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        // Show/hide content
        document.querySelectorAll('.study-mode-content').forEach(content => {
            content.classList.add('hidden');
        });
        document.getElementById(`${mode}-mode`).classList.remove('hidden');
        
        // Initialize mode-specific content
        switch(mode) {
            case 'flashcards':
                this.initializeFlashcards();
                break;
            case 'questions':
                this.initializeQuestions();
                break;
            case 'scenarios':
                this.initializeScenarios();
                break;
            case 'progress':
                this.initializeProgress();
                break;
        }
    }

    initializeFlashcards() {
        this.currentFlashcard = 0;
        this.renderFlashcard();
        this.updateFlashcardCounter();
    }

    renderFlashcard() {
        const flashcard = cmpData.flashcards[this.currentFlashcard];
        document.getElementById('flashcard-domain').textContent = `Domain ${flashcard.domain} - ${cmpData.domains[flashcard.domain].name}`;
        document.getElementById('flashcard-term').textContent = flashcard.term;
        document.getElementById('flashcard-definition').textContent = flashcard.definition;
        
        // Reset flip state
        document.getElementById('flashcard-container').classList.remove('flipped');
    }

    flipFlashcard() {
        const container = document.getElementById('flashcard-container');
        container.classList.toggle('flipped');
    }

    rateFlashcard(mastery) {
        const progress = studyProgress.flashcardProgress[this.currentFlashcard];
        progress.mastery = mastery;
        progress.timesReviewed++;
        progress.lastReviewed = new Date().toISOString();
        
        // Update domain progress
        const flashcard = cmpData.flashcards[this.currentFlashcard];
        const domainProgress = studyProgress.domainProgress[flashcard.domain];
        domainProgress.flashcardsMastered = Object.values(studyProgress.flashcardProgress)
            .filter(p => p.mastery === 2).length;
        
        this.nextFlashcard();
        this.saveProgress();
        this.updateGlobalProgress();
    }

    nextFlashcard() {
        this.currentFlashcard = (this.currentFlashcard + 1) % cmpData.flashcards.length;
        this.renderFlashcard();
        this.updateFlashcardCounter();
        
        // Animate transition
        anime({
            targets: '#flashcard-container',
            scale: [0.9, 1],
            opacity: [0.7, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }

    updateFlashcardCounter() {
        document.getElementById('flashcard-counter').textContent = this.currentFlashcard + 1;
        document.getElementById('flashcard-total').textContent = cmpData.flashcards.length;
    }

    shuffleFlashcards() {
        // Fisher-Yates shuffle
        for (let i = cmpData.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cmpData.flashcards[i], cmpData.flashcards[j]] = [cmpData.flashcards[j], cmpData.flashcards[i]];
        }
        this.currentFlashcard = 0;
        this.renderFlashcard();
        this.updateFlashcardCounter();
    }

    filterFlashcards() {
        const selectedDomain = document.getElementById('flashcard-domain-filter').value;
        if (selectedDomain === 'all') {
            // Reset to all flashcards
            this.currentFlashcard = 0;
        } else {
            // Find first flashcard of selected domain
            const index = cmpData.flashcards.findIndex(card => card.domain === selectedDomain);
            if (index !== -1) {
                this.currentFlashcard = index;
            }
        }
        this.renderFlashcard();
        this.updateFlashcardCounter();
    }

    initializeQuestions() {
        document.getElementById('start-questions-btn').style.display = 'block';
        document.getElementById('question-container').querySelector('.mb-6').style.display = 'none';
        this.updateQuestionStats();
    }

    startQuestions() {
        this.currentQuestion = 0;
        this.questionStats = { correct: 0, total: 0 };
        document.getElementById('start-questions-btn').style.display = 'none';
        document.getElementById('question-container').querySelector('.mb-6').style.display = 'block';
        this.nextQuestion();
    }

    nextQuestion() {
        const questions = this.getFilteredQuestions();
        if (this.currentQuestion >= questions.length) {
            this.completeQuestions();
            return;
        }
        
        const question = questions[this.currentQuestion];
        document.getElementById('question-domain').textContent = `Domain ${question.domain} - ${cmpData.domains[question.domain].name}`;
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'question-option p-4 border border-gray-200 rounded-lg';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => this.selectAnswer(index, question.correct, question.explanation));
            optionsContainer.appendChild(optionDiv);
        });
        
        document.getElementById('question-explanation').classList.add('hidden');
        this.updateQuestionCounter();
    }

    selectAnswer(selectedIndex, correctIndex, explanation) {
        const options = document.querySelectorAll('.question-option');
        
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== correctIndex) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === correctIndex) {
            this.questionStats.correct++;
        }
        this.questionStats.total++;
        
        // Update domain stats
        const questions = this.getFilteredQuestions();
        const currentQ = questions[this.currentQuestion];
        const domainProgress = studyProgress.domainProgress[currentQ.domain];
        domainProgress.questionsAnswered++;
        if (selectedIndex === correctIndex) {
            domainProgress.questionsCorrect++;
        }
        
        // Show explanation
        document.getElementById('explanation-text').textContent = explanation;
        document.getElementById('question-explanation').classList.remove('hidden');
        
        // Auto-advance after delay
        setTimeout(() => {
            this.currentQuestion++;
            this.nextQuestion();
        }, 3000);
        
        this.updateQuestionStats();
        this.saveProgress();
        this.updateGlobalProgress();
    }

    completeQuestions() {
        const accuracy = this.questionStats.total > 0 ? (this.questionStats.correct / this.questionStats.total * 100).toFixed(1) : 0;
        
        document.getElementById('question-container').innerHTML = `
            <div class="text-center py-8">
                <div class="text-2xl font-semibold text-navy mb-4">Questions Complete!</div>
                <div class="text-lg text-gray-600 mb-4">Score: ${this.questionStats.correct}/${this.questionStats.total} (${accuracy}%)</div>
                <button onclick="location.reload()" class="px-6 py-3 bg-gold text-white rounded-lg hover:bg-opacity-90">
                    Study More
                </button>
            </div>
        `;
    }

    getFilteredQuestions() {
        const selectedDomain = document.getElementById('questions-domain-filter').value;
        if (selectedDomain === 'all') {
            return Object.keys(cmpData.domains).flatMap(domainKey => 
                cmpData.domains[domainKey].practiceQuestions.map(q => ({...q, domain: domainKey}))
            );
        } else {
            return cmpData.domains[selectedDomain].practiceQuestions.map(q => ({...q, domain: selectedDomain}));
        }
    }

    filterQuestions() {
        this.currentQuestion = 0;
        this.updateQuestionCounter();
        this.updateQuestionStats();
    }

    updateQuestionCounter() {
        const questions = this.getFilteredQuestions();
        document.getElementById('question-counter').textContent = Math.min(this.currentQuestion + 1, questions.length);
        document.getElementById('question-total').textContent = questions.length;
    }

    updateQuestionStats() {
        document.getElementById('questions-score').textContent = `${this.questionStats.correct}/${this.questionStats.total}`;
    }

    initializeScenarios() {
        this.currentScenario = 0;
        this.renderScenario();
        this.updateScenarioCounter();
    }

    renderScenario() {
        const scenario = cmpData.scenarios[this.currentScenario];
        document.getElementById('scenario-domain').textContent = `Domain ${scenario.domain} - ${cmpData.domains[scenario.domain].name}`;
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-situation').textContent = scenario.situation;
        document.getElementById('scenario-challenge').textContent = scenario.challenge;
        document.getElementById('scenario-solution').textContent = scenario.solution;
        
        const considerationsList = document.getElementById('scenario-considerations');
        considerationsList.innerHTML = '';
        scenario.considerations.forEach(consideration => {
            const li = document.createElement('li');
            li.textContent = consideration;
            considerationsList.appendChild(li);
        });
    }

    nextScenario() {
        this.currentScenario = (this.currentScenario + 1) % cmpData.scenarios.length;
        this.renderScenario();
        this.updateScenarioCounter();
        
        // Animate transition
        anime({
            targets: '#scenario-container',
            translateX: [50, 0],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutQuad'
        });
    }

    updateScenarioCounter() {
        document.getElementById('scenario-counter').textContent = this.currentScenario + 1;
        document.getElementById('scenario-total').textContent = cmpData.scenarios.length;
    }

    initializeProgress() {
        this.updateProgressStats();
        this.renderDomainProgress();
        this.renderPerformanceChart();
    }

    updateProgressStats() {
        const totalTime = Object.values(studyProgress.domainProgress)
            .reduce((total, progress) => total + progress.timeSpent, 0);
        const flashcardsMastered = Object.values(studyProgress.flashcardProgress)
            .filter(p => p.mastery === 2).length;
        const totalQuestions = Object.values(studyProgress.domainProgress)
            .reduce((total, progress) => total + progress.questionsAnswered, 0);
        const totalCorrect = Object.values(studyProgress.domainProgress)
            .reduce((total, progress) => total + progress.questionsCorrect, 0);
        const successRate = totalQuestions > 0 ? (totalCorrect / totalQuestions * 100).toFixed(1) : 0;
        
        document.getElementById('total-study-time').textContent = this.formatTime(totalTime);
        document.getElementById('flashcards-mastered').textContent = `${flashcardsMastered} / ${cmpData.flashcards.length}`;
        document.getElementById('questions-answered').textContent = totalQuestions;
        document.getElementById('correct-answers').textContent = totalCorrect;
        document.getElementById('success-rate').textContent = `${successRate}%`;
    }

    renderDomainProgress() {
        const container = document.getElementById('domain-progress-list');
        container.innerHTML = '';
        
        Object.keys(cmpData.domains).forEach(domainKey => {
            const domain = cmpData.domains[domainKey];
            const progress = studyProgress.domainProgress[domainKey];
            
            const item = document.createElement('div');
            item.className = 'flex items-center justify-between p-3 bg-gray-50 rounded-lg';
            item.innerHTML = `
                <div>
                    <div class="font-medium text-navy">Domain ${domainKey} - ${domain.name}</div>
                    <div class="text-sm text-gray-600">${domain.weight}% of exam</div>
                </div>
                <div class="text-right">
                    <div class="font-semibold text-navy">${Math.round(progress.mastery)}%</div>
                    <div class="text-xs text-gray-500">${progress.questionsCorrect}/${progress.questionsAnswered} correct</div>
                </div>
            `;
            container.appendChild(item);
        });
    }

    renderPerformanceChart() {
        const chart = echarts.init(document.getElementById('performance-chart'));
        
        const domainNames = Object.keys(cmpData.domains).map(key => `Domain ${key}`);
        const masteryData = Object.values(studyProgress.domainProgress).map(p => p.mastery);
        const questionData = Object.values(studyProgress.domainProgress).map(p => 
            p.questionsAnswered > 0 ? (p.questionsCorrect / p.questionsAnswered * 100) : 0
        );
        
        const option = {
            title: {
                text: 'Domain Performance Overview',
                left: 'center',
                textStyle: {
                    color: '#1a2332',
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['Mastery Progress', 'Question Accuracy'],
                bottom: 10
            },
            xAxis: {
                type: 'category',
                data: domainNames,
                axisLabel: {
                    rotate: 45,
                    color: '#666'
                }
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    formatter: '{value}%',
                    color: '#666'
                }
            },
            series: [
                {
                    name: 'Mastery Progress',
                    type: 'bar',
                    data: masteryData,
                    itemStyle: {
                        color: '#c9a96e'
                    }
                },
                {
                    name: 'Question Accuracy',
                    type: 'bar',
                    data: questionData,
                    itemStyle: {
                        color: '#7a8471'
                    }
                }
            ]
        };
        
        chart.setOption(option);
        
        // Resize chart on window resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }

    startFullAssessment() {
        alert('Full assessment mode coming soon! This will include 150 questions with timed simulation.');
    }

    startPracticeAssessment() {
        alert('Practice assessment mode coming soon! This will include 30 questions for quick practice.');
    }

    startStudyTimer() {
        this.studyStartTime = Date.now();
        this.studyTimer = setInterval(() => {
            const elapsed = Date.now() - this.studyStartTime + this.totalStudyTime;
            document.getElementById('timer-display').textContent = this.formatTime(elapsed);
        }, 1000);
    }

    toggleTimer() {
        if (this.studyTimer) {
            clearInterval(this.studyTimer);
            this.studyTimer = null;
            this.totalStudyTime += Date.now() - this.studyStartTime;
        } else {
            this.startStudyTimer();
        }
    }

    updateGlobalProgress() {
        const totalMastery = Object.values(studyProgress.domainProgress)
            .reduce((total, progress) => total + progress.mastery, 0);
        const averageMastery = totalMastery / Object.keys(cmpData.domains).length;
        
        document.getElementById('global-progress-bar').style.width = `${averageMastery}%`;
        document.getElementById('global-progress-text').textContent = `${Math.round(averageMastery)}%`;
    }

    formatTime(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }

    saveProgress() {
        localStorage.setItem('cmpStudyProgress', JSON.stringify(studyProgress));
    }

    loadProgress() {
        const saved = localStorage.getItem('cmpStudyProgress');
        if (saved) {
            const loadedProgress = JSON.parse(saved);
            // Merge with default progress
            Object.assign(studyProgress, loadedProgress);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CMPStudyTool();
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all domain cards
document.querySelectorAll('.domain-card').forEach(card => {
    observer.observe(card);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Flashcard controls
    if (document.getElementById('flashcards-mode').classList.contains('hidden') === false) {
        if (e.key === ' ') {
            e.preventDefault();
            document.getElementById('flashcard-container').click();
        } else if (e.key === '1') {
            document.getElementById('flashcard-dont-know').click();
        } else if (e.key === '2') {
            document.getElementById('flashcard-review').click();
        } else if (e.key === '3') {
            document.getElementById('flashcard-know').click();
        }
    }
    
    // Question controls
    if (document.getElementById('questions-mode').classList.contains('hidden') === false) {
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.question-option');
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
        }
    }
});

console.log('CMP Study Tool initialized successfully! 🎓');