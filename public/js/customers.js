// DATA AND ANALYTICS
// ...NEED UTILITY BUTTON
if (document.title === "Data & Analytics") {
    var bannersData = [
        {
            'src': '/assets/images/data/Data-Analytics-head-8.png',
        },
        {
            'src': '/assets/images/data/Data-Capabilities.png'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Teamwork-button-8.png'
        }
    ];

    var employeeData = [
        {
            'name': 'Sneha Nayee',
            'email': 'snayee@prattindustries.com',
            'lead': true,
            'img': '/assets/images/signage/Rick Sensenbrenner Fix.png',
        },
        {
            'name': 'Bryan Smith',
            'email': 'basmith@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Angela Clark Fix.png',
        },
        {
            'name': 'Hiren Jani',
            'email': 'hjani@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        },
        {
            'name': 'Stephen Codara',
            'email': 'scodara@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        }
    ];
};

let headerEl = document.querySelector('header');
let capabilitiesEl = document.querySelector('.capabilities');
let utilityEl = document.querySelector('.utility');
let leadEl = document.querySelector('.lead');
let membersEl = document.querySelector('.team-members');

console.log(document)

// calling functions
generateBanners();
generateUtilityBtns();
generateEmployees();


// generate header and capabilities banners
function generateBanners() {
    const headerBanner = bannersData[0];
    
    const headerBannerEl = document.createElement('img');
    headerBannerEl.setAttribute('src', headerBanner.src);
    headerBannerEl.setAttribute('alt', 'signage/events banner');

    const capabilitiesBanner = bannersData[1];

    const capabilitiesBannerEl = document.createElement('img');
    capabilitiesBannerEl.setAttribute('src', capabilitiesBanner.src);
    capabilitiesBannerEl.setAttribute('alt', 'signage/events capabilities');

    headerEl.appendChild(headerBannerEl);
    capabilitiesEl.appendChild(capabilitiesBannerEl);
};

// generate utility buttons for page
function generateUtilityBtns() {
    utilityData.forEach(btn => {
        
        const utilityBtnEl = document.createElement('a');
        const utilityBtnImg = document.createElement('img');

        utilityBtnImg.setAttribute('src', btn.src)

        utilityBtnEl.appendChild(utilityBtnImg);;
        utilityEl.appendChild(utilityBtnEl);  
    });

    const utilityA = document.querySelectorAll('.utility a');

    if (utilityA.length === 1) {
        utilityA[0].classList.add('centeredUtility');   
    }
};

// generate team lead and members of team
function generateEmployees() {
    employeeData.forEach(employee => {

        if(employee.lead === true) {

            const teamLeadEl = document.createElement('div');
            teamLeadEl.classList.add('team-lead');

            teamLeadEl.innerHTML = `
                <div class="lead-img">
                    <img src="${employee.img}" alt="${employee.name} image">
                </div>
                <div class="lead-details">
                    <h2>Key Contact:</h2>
                    <p>${employee.name}</p>
                    <p>Signage Lead</p>
                    <a href="mailto:${employee.email}"><img title="${employee.email}" src="/assets/images/email-asset-128-fix.png" alt=""></a>
                </div>
            `

            leadEl.appendChild(teamLeadEl);
        };

        if(employee.lead === false) {

            const teamMembersEl = document.createElement('div');
            teamMembersEl.classList.add('member');

            teamMembersEl.innerHTML = `
                <img class="member-img" src="${employee.img}" alt="${employee.name} image">
                <p>${employee.name}</p>
                <a href="mailto:${employee.email}"><img title="${employee.email}" src="/assets/images/email-asset-128-fix.png" alt=""></a>
            `

            membersEl.appendChild(teamMembersEl);
        }
    });
};