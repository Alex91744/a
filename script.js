// Build data with detailed information - Android 8+ devices only
const buildData = [
    // Public App Builds
    { 
        buildId: "S6000Y25MJD1SU10", 
        date: "June 1, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "public", 
        buildNumber: 1,
        supportedDevices: [
            "Samsung Galaxy S8", "Samsung Galaxy S8+", "Samsung Galaxy S7", "Samsung Galaxy S7 Edge",
            "Samsung Galaxy Note 8", "Samsung Galaxy A8 (2018)", "Samsung Galaxy A8+ (2018)",
            "Samsung Galaxy J7 (2017)", "Samsung Galaxy J5 (2017)", "Samsung Galaxy J3 (2017)",
            "Google Pixel 2", "Google Pixel 2 XL"
        ],
        knownIssues: ["Apps not loading on first launch", "Minor UI glitches in dark mode"],
        changelog: ["Initial public release", "Basic store functionality", "User authentication system"]
    },
    { 
        buildId: "S6000Y25MJD6SU10", 
        date: "June 6, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "public", 
        buildNumber: 2,
        supportedDevices: [
            "Samsung Galaxy S8", "Samsung Galaxy S8+", "Samsung Galaxy S7", "Samsung Galaxy S7 Edge",
            "Samsung Galaxy Note 8", "Samsung Galaxy A8 (2018)", "Samsung Galaxy A8+ (2018)",
            "Samsung Galaxy A7 (2018)", "Samsung Galaxy A5 (2018)", "Samsung Galaxy A3 (2018)",
            "Samsung Galaxy J7 (2017)", "Samsung Galaxy J5 (2017)", "Samsung Galaxy J3 (2017)",
            "Google Pixel 2", "Google Pixel 2 XL", "Google Pixel 3", "Google Pixel 3 XL"
        ],
        knownIssues: ["App lags during heavy usage"],
        changelog: ["Expanded device support", "Fixed authentication bugs", "Performance improvements"]
    },
    { 
        buildId: "S6000Y25MJD8SU10", 
        date: "June 8, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "public", 
        buildNumber: 3,
        supportedDevices: [
            "Samsung Galaxy S9", "Samsung Galaxy S9+", "Samsung Galaxy S8", "Samsung Galaxy S8+",
            "Samsung Galaxy Note 9", "Samsung Galaxy Note 8", "Samsung Galaxy A9 (2018)",
            "Samsung Galaxy A8 (2018)", "Samsung Galaxy A8+ (2018)", "Samsung Galaxy A7 (2018)",
            "Samsung Galaxy J8", "Samsung Galaxy J7 (2018)", "Samsung Galaxy J6",
            "Google Pixel 2", "Google Pixel 2 XL", "Google Pixel 3", "Google Pixel 3 XL", "Google Pixel 3a", "Google Pixel 3a XL"
        ],
        knownIssues: ["Devices overheat during downloads", "App says update is coming when it's not"],
        changelog: ["Enhanced download system", "UI refinements", "Bug fixes for login issues"]
    },
    { 
        buildId: "S6000Y25MJD17SU10", 
        date: "June 17, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "public", 
        buildNumber: 4,
        supportedDevices: [
            "Samsung Galaxy S10", "Samsung Galaxy S10+", "Samsung Galaxy S10e", "Samsung Galaxy S9", "Samsung Galaxy S9+",
            "Samsung Galaxy Note 10", "Samsung Galaxy Note 10+", "Samsung Galaxy Note 9",
            "Samsung Galaxy A50", "Samsung Galaxy A30", "Samsung Galaxy A20", "Samsung Galaxy A10",
            "Samsung Galaxy A80", "Samsung Galaxy A70", "Samsung Galaxy A60",
            "Google Pixel 3", "Google Pixel 3 XL", "Google Pixel 3a", "Google Pixel 3a XL", "Google Pixel 4", "Google Pixel 4 XL"
        ],
        knownIssues: ["Apps not loading for some users"],
        changelog: ["Stability improvements", "Fixed overheating issues", "Enhanced security features"]
    },
    { 
        buildId: "S6000Y25MJD22SU20", 
        date: "June 22, 2025", 
        storeUiVersion: "Store UI 2.0", 
        buildType: "public", 
        buildNumber: 5,
        supportedDevices: [
            "Samsung Galaxy S21", "Samsung Galaxy S21+", "Samsung Galaxy S21 Ultra", "Samsung Galaxy S20", "Samsung Galaxy S20+", "Samsung Galaxy S20 Ultra",
            "Samsung Galaxy Note 20", "Samsung Galaxy Note 20 Ultra", "Samsung Galaxy Note 10", "Samsung Galaxy Note 10+",
            "Samsung Galaxy A52", "Samsung Galaxy A72", "Samsung Galaxy A51", "Samsung Galaxy A71", "Samsung Galaxy A32", "Samsung Galaxy A12",
            "Samsung Galaxy Z Flip", "Samsung Galaxy Z Fold2", "Samsung Galaxy Z Flip3", "Samsung Galaxy Z Fold3",
            "Google Pixel 4", "Google Pixel 4 XL", "Google Pixel 4a", "Google Pixel 4a 5G", "Google Pixel 5", "Google Pixel 5a",
            "Google Pixel 6", "Google Pixel 6 Pro", "Google Pixel 6a"
        ],
        knownIssues: [],
        changelog: ["Major UI redesign", "Store UI 2.0 implementation", "All known issues resolved"]
    },
    
    // Developer App Builds
    { 
        buildId: "S6000Y25MAD28SU10", 
        date: "April 28, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "developer", 
        buildNumber: 1,
        supportedDevices: [
            "Samsung Galaxy S8", "Samsung Galaxy S8+", "Samsung Galaxy Note 8",
            "Samsung Galaxy A8 (2018)", "Samsung Galaxy A8+ (2018)",
            "Google Pixel 2", "Google Pixel 2 XL"
        ],
        knownIssues: ["App lags significantly", "Older devices overheat during basic app use", "Apps not loading consistently"],
        changelog: ["Initial developer build", "Basic functionality testing", "Debug features enabled"]
    },
    { 
        buildId: "S6000Y25MJD3SU10", 
        date: "June 3, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "developer", 
        buildNumber: 2,
        supportedDevices: [
            "Samsung Galaxy S9", "Samsung Galaxy S9+", "Samsung Galaxy S8", "Samsung Galaxy S8+",
            "Samsung Galaxy Note 9", "Samsung Galaxy Note 8", "Samsung Galaxy A9 (2018)",
            "Samsung Galaxy A8 (2018)", "Samsung Galaxy A8+ (2018)",
            "Google Pixel 2", "Google Pixel 2 XL", "Google Pixel 3", "Google Pixel 3 XL"
        ],
        knownIssues: ["App says update is coming when it's not", "Minor performance issues"],
        changelog: ["Expanded device compatibility", "Testing new download features", "Performance optimizations"]
    },
    { 
        buildId: "S6000Y25MJD5SU10", 
        date: "June 5, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "developer", 
        buildNumber: 3,
        supportedDevices: [
            "Samsung Galaxy S10", "Samsung Galaxy S10+", "Samsung Galaxy S10e", "Samsung Galaxy S9", "Samsung Galaxy S9+",
            "Samsung Galaxy Note 10", "Samsung Galaxy Note 10+", "Samsung Galaxy Note 9",
            "Samsung Galaxy A50", "Samsung Galaxy A30", "Samsung Galaxy A20",
            "Google Pixel 3", "Google Pixel 3 XL", "Google Pixel 3a", "Google Pixel 3a XL", "Google Pixel 4", "Google Pixel 4 XL"
        ],
        knownIssues: ["Devices overheat during heavy usage"],
        changelog: ["Extended Android 8+ compatibility testing", "Enhanced debugging tools", "Memory usage improvements"]
    },
    { 
        buildId: "S6000Y25MJD13SU10", 
        date: "June 13, 2025", 
        storeUiVersion: "Store UI 1.0", 
        buildType: "developer", 
        buildNumber: 4,
        supportedDevices: [
            "Samsung Galaxy S20", "Samsung Galaxy S20+", "Samsung Galaxy S20 Ultra", "Samsung Galaxy S10", "Samsung Galaxy S10+",
            "Samsung Galaxy Note 20", "Samsung Galaxy Note 20 Ultra", "Samsung Galaxy Note 10", "Samsung Galaxy Note 10+",
            "Samsung Galaxy A51", "Samsung Galaxy A71", "Samsung Galaxy A50", "Samsung Galaxy A30",
            "Samsung Galaxy Z Flip", "Samsung Galaxy Z Fold2",
            "Google Pixel 4", "Google Pixel 4 XL", "Google Pixel 4a", "Google Pixel 4a 5G", "Google Pixel 5"
        ],
        knownIssues: ["Apps not loading on some devices"],
        changelog: ["Security testing phase", "API improvements", "Cache optimization"]
    },
    { 
        buildId: "S6000Y25MJD19SU20", 
        date: "June 19, 2025", 
        storeUiVersion: "Store UI 2.0", 
        buildType: "developer", 
        buildNumber: 5,
        supportedDevices: [
            "Samsung Galaxy S21", "Samsung Galaxy S21+", "Samsung Galaxy S21 Ultra", "Samsung Galaxy S20", "Samsung Galaxy S20+",
            "Samsung Galaxy Note 20", "Samsung Galaxy Note 20 Ultra", "Samsung Galaxy Note 10", "Samsung Galaxy Note 10+",
            "Samsung Galaxy A52", "Samsung Galaxy A72", "Samsung Galaxy A51", "Samsung Galaxy A32",
            "Samsung Galaxy Z Flip3", "Samsung Galaxy Z Fold3", "Samsung Galaxy Z Flip", "Samsung Galaxy Z Fold2",
            "Google Pixel 5", "Google Pixel 5a", "Google Pixel 6", "Google Pixel 6 Pro", "Google Pixel 6a"
        ],
        knownIssues: ["App lags with new UI", "Update notifications not working correctly"],
        changelog: ["Store UI 2.0 beta testing", "New interface elements", "Performance monitoring"]
    },
    { 
        buildId: "S6000Y25MJD27SU30", 
        date: "June 27, 2025", 
        storeUiVersion: "Store UI 3.0", 
        buildType: "developer", 
        buildNumber: 6,
        supportedDevices: [
            "Samsung Galaxy S22", "Samsung Galaxy S22+", "Samsung Galaxy S22 Ultra", "Samsung Galaxy S21", "Samsung Galaxy S21+",
            "Samsung Galaxy Note 20", "Samsung Galaxy Note 20 Ultra",
            "Samsung Galaxy A53", "Samsung Galaxy A73", "Samsung Galaxy A52", "Samsung Galaxy A33",
            "Samsung Galaxy Z Flip4", "Samsung Galaxy Z Fold4", "Samsung Galaxy Z Flip3", "Samsung Galaxy Z Fold3",
            "Google Pixel 6", "Google Pixel 6 Pro", "Google Pixel 6a", "Google Pixel 7", "Google Pixel 7 Pro", "Google Pixel 7a"
        ],
        knownIssues: ["Reduced device support for optimization", "Some older Android 8 devices excluded"],
        changelog: ["Store UI 3.0 development", "Focused on newer Android 8+ devices", "Advanced features testing"]
    },
];

// Global variables
let currentFilter = 'all';
let currentSearchTerm = '';
let filteredBuilds = [];

// DOM elements
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const publicBuilds = document.getElementById('publicBuilds');
const developerBuilds = document.getElementById('developerBuilds');
const publicSection = document.getElementById('publicSection');
const developerSection = document.getElementById('developerSection');
const noResults = document.getElementById('noResults');
const buildsContainer = document.getElementById('buildsContainer');
const loading = document.getElementById('loading');
const totalCount = document.getElementById('totalCount');
const publicCount = document.getElementById('publicCount');
const developerCount = document.getElementById('developerCount');

// Sort builds by date (newest first) within each type
function sortBuilds(builds) {
    return builds.sort((a, b) => {
        // First sort by build type (public first)
        if (a.buildType !== b.buildType) {
            return a.buildType === 'public' ? -1 : 1;
        }
        // Then sort by date (newest first)
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
}

// Filter builds based on search term and current filter
function filterBuilds() {
    let filtered = [...buildData];
    
    // Apply search filter
    if (currentSearchTerm) {
        const term = currentSearchTerm.toLowerCase();
        filtered = filtered.filter(build => 
            build.buildId.toLowerCase().includes(term) ||
            build.date.toLowerCase().includes(term) ||
            build.storeUiVersion.toLowerCase().includes(term)
        );
    }
    
    // Apply type filter
    if (currentFilter !== 'all') {
        filtered = filtered.filter(build => build.buildType === currentFilter);
    }
    
    return sortBuilds(filtered);
}

// Create build card HTML
function createBuildCard(build, isLatest = false) {
    const isPublic = build.buildType === 'public';
    const badgeClass = isPublic ? 'public' : 'developer';
    
    let badges = '';
    if (isLatest) {
        if (isPublic) {
            badges = '<span class="badge latest">Latest</span>';
        } else {
            badges = '<span class="badge dev-latest">Dev Latest</span>';
        }
    }
    
    return `
        <div class="build-card" onclick="showBuildDetails('${build.buildId}')">
            <div class="build-header">
                <span class="build-number ${badgeClass}">#${build.buildNumber}</span>
                <span class="build-id">${build.buildId}</span>
            </div>
            <div class="build-info">
                <div class="build-date">
                    📅 ${build.date}
                </div>
                <div class="build-version">
                    🔧 ${build.storeUiVersion}
                </div>
            </div>
            ${badges ? `<div class="build-badges">${badges}</div>` : ''}
        </div>
    `;
}

// Render builds
function renderBuilds() {
    // Show loading
    loading.classList.remove('hidden');
    buildsContainer.classList.add('hidden');
    noResults.classList.add('hidden');
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        filteredBuilds = filterBuilds();
        
        const publicFilteredBuilds = filteredBuilds.filter(build => build.buildType === 'public');
        const developerFilteredBuilds = filteredBuilds.filter(build => build.buildType === 'developer');
        
        // Clear previous content
        publicBuilds.innerHTML = '';
        developerBuilds.innerHTML = '';
        
        // Render public builds
        if (publicFilteredBuilds.length > 0 && (currentFilter === 'all' || currentFilter === 'public')) {
            publicFilteredBuilds.forEach((build, index) => {
                publicBuilds.innerHTML += createBuildCard(build, index === 0);
            });
            publicSection.style.display = 'block';
        } else {
            publicSection.style.display = 'none';
        }
        
        // Render developer builds
        if (developerFilteredBuilds.length > 0 && (currentFilter === 'all' || currentFilter === 'developer')) {
            developerFilteredBuilds.forEach((build, index) => {
                developerBuilds.innerHTML += createBuildCard(build, index === 0);
            });
            developerSection.style.display = 'block';
        } else {
            developerSection.style.display = 'none';
        }
        
        // Update stats
        updateStats();
        
        // Show/hide content
        loading.classList.add('hidden');
        
        if (filteredBuilds.length === 0) {
            noResults.classList.remove('hidden');
            buildsContainer.classList.add('hidden');
        } else {
            noResults.classList.add('hidden');
            buildsContainer.classList.remove('hidden');
        }
    }, 300);
}

// Update footer statistics
function updateStats() {
    const publicFilteredBuilds = filteredBuilds.filter(build => build.buildType === 'public');
    const developerFilteredBuilds = filteredBuilds.filter(build => build.buildType === 'developer');
    
    totalCount.textContent = filteredBuilds.length;
    publicCount.textContent = publicFilteredBuilds.length;
    developerCount.textContent = developerFilteredBuilds.length;
}

// Handle search input
function handleSearch(event) {
    currentSearchTerm = event.target.value.trim();
    renderBuilds();
}

// Handle filter change
function handleFilterChange(event) {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update current filter
    currentFilter = event.target.dataset.filter;
    
    // Re-render builds
    renderBuilds();
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Modal functionality
function showBuildDetails(buildId) {
    const build = buildData.find(b => b.buildId === buildId);
    if (!build) return;
    
    const modal = document.getElementById('buildModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBuildId = document.getElementById('modalBuildId');
    const modalDate = document.getElementById('modalDate');
    const modalVersion = document.getElementById('modalVersion');
    const modalType = document.getElementById('modalType');
    const modalDevices = document.getElementById('modalDevices');
    const modalIssues = document.getElementById('modalIssues');
    const modalChangelog = document.getElementById('modalChangelog');
    
    // Set modal title
    modalTitle.textContent = `Build ${build.buildId}`;
    
    // Set basic info
    modalBuildId.textContent = build.buildId;
    modalDate.textContent = build.date;
    modalVersion.textContent = build.storeUiVersion;
    modalType.textContent = build.buildType.charAt(0).toUpperCase() + build.buildType.slice(1);
    
    // Set supported devices
    modalDevices.innerHTML = '';
    build.supportedDevices.forEach(device => {
        const deviceTag = document.createElement('span');
        deviceTag.className = 'device-tag';
        deviceTag.textContent = device;
        modalDevices.appendChild(deviceTag);
    });
    
    // Show excluded devices for newer builds if any
    // Latest dev build focuses on newer Android 8+ devices only
    
    // Set known issues
    modalIssues.innerHTML = '';
    if (build.knownIssues.length === 0) {
        const noIssues = document.createElement('div');
        noIssues.className = 'no-issues';
        noIssues.textContent = 'No known issues - All systems operational';
        modalIssues.appendChild(noIssues);
    } else {
        build.knownIssues.forEach(issue => {
            const issueItem = document.createElement('div');
            issueItem.className = 'issue-item';
            issueItem.textContent = issue;
            modalIssues.appendChild(issueItem);
        });
    }
    
    // Set changelog
    modalChangelog.innerHTML = '';
    build.changelog.forEach(change => {
        const changeItem = document.createElement('div');
        changeItem.className = 'changelog-item';
        changeItem.textContent = change;
        modalChangelog.appendChild(changeItem);
    });
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function hideBuildDetails() {
    const modal = document.getElementById('buildModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Initialize the app
function init() {
    // Add event listeners
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilterChange);
    });
    
    // Modal event listeners
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    modalClose.addEventListener('click', hideBuildDetails);
    modalOverlay.addEventListener('click', hideBuildDetails);
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideBuildDetails();
        }
    });
    
    // Initial render
    renderBuilds();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);