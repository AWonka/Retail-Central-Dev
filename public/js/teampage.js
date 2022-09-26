let headerEl = document.querySelector('header');
let capabilitiesEl = document.querySelector('.capabilities');
let utilityEl = document.querySelector('.utility');
let leadEl = document.querySelector('.lead');
let membersEl = document.querySelector('.team-members');

let leadTitle = '';

// Accounting & Finance
if (document.title === "Accounting & Finance") {
    leadTitle = 'Controller-Retail';

    var bannersData = [
        {
            'src': '/assets/images/finance/Finance-head-8.png',
            'alt': 'Finance Banner',
        },
        {
            'src': '/assets/images/finance/Finance-capabilities.png',
            'alt': 'Finance Capabilities'
        }
    ];

    // No utilities

    var utilityData = [
        {
            'src': '/assets/images/Certify button-8.png',
            'alt': 'Certify Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Casey Yingling',
            'email': 'cyingling@prattindustries.com',
            'lead': true,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Bob Cichanski',
            'email': 'bcichanski@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Katie Adcock',
            'email': 'kadcock@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'John Heinschel',
            'email': 'jheinschel@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Tara Soroko',
            'email': 'tsoroko@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Penny Ross',
            'email': 'pross@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
    ];
};

// Converted Paper
if (document.title === "Converted Paper") {
    leadTitle = 'President';

    var bannersData = [
        {
            'src': '/assets/images/converted paper/Converted-Paper-head-8.png',
            'alt': 'Converted Paper',
        },
        {
            'src': '/assets/images/converted paper/Converted-Paper-Capabilities-8.png',
            'alt': 'Converted Paper Capabilities'
        }
    ];

    // No utilities

    var utilityData = [
        {
            'src': '',
            'alt': ''
        }
    ];

    var employeeData = [
        {
            'name': 'Jay Rogers',
            'email': 'jnrogers@prattindustries.com',
            'lead': true,
            'img': '/assets/images/converted paper/jay-rogers-fix.png',
        },
        {
            'name': 'Kevin Kein',
            'email': 'kkein@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Karol Krahel',
            'email': 'kkrahel@prattindustries.com',
            'lead': false,
            'img': '/assets/images/converted paper/karol-krahel-fix.png',
        },
    ];
};

// DATA AND ANALYTICS
// ...NEED UTILITY BUTTON
if (document.title === "Data & Analytics") {
    var bannersData = [
        {
            'src': '/assets/images/data/Data-Analytics-head-8.png',
            'alt': 'Data and Analytics',
        },
        {
            'src': '/assets/images/data/Data-Capabilities.png',
            'alt': 'Data and Analytics Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Teamwork-button-8.png',
            'alt': 'Teamwork Button'
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

// DESIGN
if (document.title === "Design") {
    var bannersData = [
        {
            'src': '/assets/images/design/Design head-8.png',
            'alt': 'Design',
        },
        {
            'src': '/assets/images/design/Design-capabilities.png',
            'alt': 'Design Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Teamwork-button-8.png',
            'alt': 'Teamwork Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Travis Walters',
            'email': 'twwalters@prattindustries.com',
            'lead': true,
            'img': '/assets/images/signage/Rick Sensenbrenner Fix.png',
        },
        {
            'name': 'Rebecca Iverson',
            'email': 'riverson@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Angela Clark Fix.png',
        },
        {
            'name': 'Daniell Isett',
            'email': 'disett@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        }
    ];
};

// HUMAN RESOURCES
// ...NEED CAPABILITIES BANNER
if (document.title === "Human Resources") {
    var bannersData = [
        {
            'src': '/assets/images/hr/HR-head-8.png',
            'alt': 'Human Resources',
        },
        {
            'src': '/assets/images/design/Design-capabilities.png',
            'alt': 'Human Resources Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/ADP-web-HR.png',
            'alt': 'Visit ADP button'
        }
    ];

    var employeeData = [
        {
            'name': 'Shannon Zink',
            'email': 'szink@prattindustries.com',
            'lead': true,
            'img': '/assets/images/signage/Rick Sensenbrenner Fix.png',
        },
        {
            'name': 'Matthew Mutarelli',
            'email': 'mgmutarelli@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Angela Clark Fix.png',
        },
        {
            'name': 'Andrea Martinez',
            'email': 'ammartinez2@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        },
        {
            'name': 'PJ Rhodes',
            'email': 'prhodes@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        }
    ];
};

// INVENTORY ANALYSIS
// ...NEED CAPABILITIES BANNER
if (document.title === "Inventory Analysis") {
    var bannersData = [
        {
            'src': '/assets/images/inventory/Inventory_1-8.png',
            'alt': 'Inventory Analysis',
        },
        {
            'src': '/assets/images/data/Data-Capabilities.png',
            'alt': 'Inventory Analysis Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/New Item Setup-Inventory.png',
            'alt': 'New Item Setup Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Matt Smith',
            'email': 'msmith@prattindustries.com',
            'lead': true,
            'img': '/assets/images/signage/Rick Sensenbrenner Fix.png',
        },
        {
            'name': 'Alex Inda',
            'email': 'ainda@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Angela Clark Fix.png',
        },
        {
            'name': 'Jess Hoskinson Beard',
            'email': 'jhoskinson@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        },
        {
            'name': 'Chris Ward',
            'email': 'cward2@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        },
        {
            'name': 'Lori McComas',
            'email': 'lmccomas@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        },
        {
            'name': 'Jim Knight',
            'email': 'jknight@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        },
        {
            'name': 'John Steeg',
            'email': 'jsteeg@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        },
        {
            'name': 'Lynn Collins',
            'email': 'lcollins@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Ed Wisinksi Fix.png',
        }
    ];
};

// PPD
if (document.title === "PPD") {
    leadTitle = 'PPD Manager';

    var bannersData = [
        {
            'src': '/assets/images/ppd/PPD-head-8.png',
            'alt': 'PPD Header',
        },
        {
            'src': '/assets/images/ppd/PPD-Capabilities-8.png',
            'alt': 'PPD Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Quote Request-Sourcing.png',
            'alt': 'Quote Request Button',
        },
        {
            'src': '/assets/images/PPD Sample Button.png',
            'alt': 'PPD Sample Request Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Bob Feldman',
            'email': 'bfeldman@prattindustries.com',
            'lead': true,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Ritchie Bell',
            'email': 'rbell@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Bryan Smith',
            'email': 'basmith@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        }
    ];
};

// QUALITY
if (document.title === "Quality") {
    var bannersData = [
        {
            'src': '/assets/images/qa/QC head.png',
            'alt': 'Quality',
        },
        {
            'src': '/assets/images/qa/QC-Capabilities.png',
            'alt': 'Quality Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Fab card - Quality.png',
            'alt': 'Fab Card Button',
        },
        {
            'src': '/assets/images/Quality Alert.png',
            'alt': 'Quality Alert Button'
        }
    ];

    var employeeData = [
        {
            'name': 'David Timmons',
            'email': 'dtimmons@prattindustries.com',
            'lead': true,
            'img': '/assets/images/signage/Rick Sensenbrenner Fix.png',
        },
        {
            'name': 'Amy Rusignuolo',
            'email': 'arusignuolo@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Angela Clark Fix.png',
        },
        {
            'name': 'Kristen Kane',
            'email': 'kkane@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        },
        {
            'name': 'Patty Nichols',
            'email': 'pnichols@prattindustries.com',
            'lead': false,
            'img': '/assets/images/signage/Bernie Trueblood Fix.png',
        }
    ];
};

// SAFETY
// ...IS THERE NO UTILITY BUTTON?
if (document.title === "Safety") {
    var bannersData = [
        {
            'src': '/assets/images/safety/Safety head.png',
            'alt': 'Safety',
        },
        {
            'src': '/assets/images/safety/Safety Capabilities.png',
            'alt': 'Safety Capabilities'
        }
    ];

    var utilityData = [
        
    ];

    var employeeData = [
        {
            'name': 'Corey Roskoski',
            'email': 'croskoski@prattindustries.com',
            'lead': true,
            'img': '/assets/images/sourcing/Lynn-Collins-Fix.png',
        }
    ];
};

// Pratt Direct
// ...NEED EMPLOYEES UPDATED
if (document.title === "Pratt Direct") {
    leadTitle = 'Director';

    var bannersData = [
        {
            'src': '/assets/images/pratt-direct/Pratt Direct head-8.png',
            'alt': 'Signage',
        },
        {
            'src': '/assets/images/pratt-direct/S&D-capabilities.png',
            'alt': 'Signage Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Teamwork-button-8.png',
            'alt': 'Teamwork Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Josh Kayne',
            'email': 'jkayne@prattindustries.com',
            'lead': true,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Jace Denney',
            'email': 'Jdenney@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'John Muse',
            'email': 'jmuse@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'JJ Musgrove',
            'email': 'jmusgrov@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Jim Bickley',
            'email': 'jbickley@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        },
        {
            'name': 'Scott Geltner',
            'email': 'sgeltner@prattindustries.com',
            'lead': false,
            'img': '/assets/images/Profile-place-holder-8.png',
        }
    ];
};

// SOURCING
// ...NEED CAPABILITIES BANNER
if (document.title === "Sourcing") {
    var bannersData = [
        {
            'src': '/assets/images/sourcing/Sourcing-head-8.png',
            'alt': 'Sourcing',
        },
        {
            'src': '/assets/images/signage/S&D-capabilities.png',
            'alt': 'Signage Capabilities'
        }
    ];

    var utilityData = [
        {
            'src': '/assets/images/Quote Request-Sourcing.png',
            'alt': 'Quote Request Button'
        }
    ];

    var employeeData = [
        {
            'name': 'Lynn Collins',
            'email': 'lcollins@prattindustries.com',
            'lead': true,
            'img': '/assets/images/sourcing/Lynn-Collins-Fix.png',
        },
        {
            'name': 'Rusty Rivers',
            'email': 'rmrivers@prattindustries.com',
            'lead': false,
            'img': '/assets/images/sourcing/Rusty-Rivers-Fix.png',
        }
    ];
};

// commented code below for reading csv data for when we have csv file finalized

// var url = "/assets/Pratt Retail Directory - Teams.csv";

// var request = new XMLHttpRequest();
// request.open('GET', url, false);
// request.send(null);

// var csvData = new Array();
// var jsonObject = request.responseText.split(/\r?\n|\r/);
// for (var i = 0; i < jsonObject.length; i++) {
//     csvData.push(jsonObject[i].split(','));
// }

// console.log(csvData);

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
    headerBannerEl.setAttribute('alt', headerBanner.alt);

    const capabilitiesBanner = bannersData[1];

    const capabilitiesBannerEl = document.createElement('img');
    capabilitiesBannerEl.setAttribute('src', capabilitiesBanner.src);
    capabilitiesBannerEl.setAttribute('alt', capabilitiesBanner.alt);

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
                    <p>${leadTitle}</p>
                    <a href="mailto:${employee.email}"><img title="${employee.email}" src="/assets/images/email-asset-128-fix.png" alt="${employee.email}"></a>
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
                <a href="mailto:${employee.email}"><img title="${employee.email}" src="/assets/images/email-asset-128-fix.png" alt="${employee.email}"></a>
            `

            membersEl.appendChild(teamMembersEl);
        }
    });
};