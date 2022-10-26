const hdBtn = document.querySelector('#hdBtn')
const wmBtn = document.querySelector('#wmBtn')
const uspsBtn = document.querySelector('#uspsBtn')
const psBtn = document.querySelector('#psBtn')
const otherBtn = document.querySelector('#otherBtn')

const hdTeam = document.querySelector('#hd-container')
const wmTeam = document.querySelector('#wm-container')
const uspsTeam = document.querySelector('#usps-container')
const psTeam = document.querySelector('#ps-container')
const otherTeam = document.querySelector('#other-container')

const hdArrow = document.querySelector('#hd-arrow')
const wmArrow = document.querySelector('#wm-arrow')
const uspsArrow = document.querySelector('#usps-arrow')
const psArrow = document.querySelector('#ps-arrow')
const otherArrow = document.querySelector('#other-arrow')

var hdShow = function() {
    if(hdTeam.style.display === 'none') {
        // display containers
        hdTeam.style.display = 'block'
        wmTeam.style.display = 'none'
        uspsTeam.style.display = 'none'
        psTeam.style.display = 'none'
        otherTeam.style.display = 'none'
        // display arrows
        hdArrow.style.display = 'block'
        wmArrow.style.display = 'none'
        uspsArrow.style.display = 'none'
        psArrow.style.display = 'none'
        otherArrow.style.display = 'none'
        // border styles while selected
        hdBtn.style.border = 'thick solid #FF9900'
        hdBtn.style.borderRadius = '25px'
        // turn other borders off
        wmBtn.style.border = 'none'
        uspsBtn.style.border = 'none'
        psBtn.style.border = 'none'
        otherBtn.style.border = 'none'
    } else {
        hdTeam.style.display = 'none'
        hdArrow.style.display = 'none'
        // turn border off
        hdBtn.style.border = 'none'
    }
}

var wmShow = function() {
    if(wmTeam.style.display === 'none') {
        // display containers
        wmTeam.style.display = 'block'
        hdTeam.style.display = 'none'
        uspsTeam.style.display = 'none'
        psTeam.style.display = 'none'
        otherTeam.style.display = 'none'
        // display arrows
        wmArrow.style.display = 'block'
        hdArrow.style.display = 'none'
        uspsArrow.style.display = 'none'
        psArrow.style.display = 'none'
        otherArrow.style.display = 'none'
        // border styles while selected
        wmBtn.style.border = 'thick solid #3399FF'
        wmBtn.style.borderRadius = '25px'
        // turn other borders off
        hdBtn.style.border = 'none'
        uspsBtn.style.border = 'none'
        psBtn.style.border = 'none'
        otherBtn.style.border = 'none'
    } else {
        wmTeam.style.display = 'none'
        wmArrow.style.display = 'none'
        // turn border off
        wmBtn.style.border = 'none'
    }
}

var uspsShow = function() {
    if(uspsTeam.style.display === 'none') {
        // display containers
        uspsTeam.style.display = 'block'
        hdTeam.style.display = 'none'
        wmTeam.style.display = 'none'
        psTeam.style.display = 'none'
        otherTeam.style.display = 'none'
        // display containers
        uspsArrow.style.display = 'block'
        hdArrow.style.display = 'none'
        wmArrow.style.display = 'none'
        psArrow.style.display = 'none'
        otherArrow.style.display = 'none'
        // border styles while selected
        uspsBtn.style.border = 'thick solid #003399'
        uspsBtn.style.borderRadius = '25px'
        // turn other borders off
        hdBtn.style.border = 'none'
        wmBtn.style.border = 'none'
        psBtn.style.border = 'none'
        otherBtn.style.border = 'none'
    } else {
        uspsTeam.style.display = 'none'
        uspsArrow.style.display = 'none'
        // turn border off
        uspsBtn.style.border = 'none'
    }
}

var psShow = function() {
    if(psTeam.style.display === 'none') {
        // display containers
        psTeam.style.display = 'block'
        hdTeam.style.display = 'none'
        uspsTeam.style.display = 'none'
        wmTeam.style.display = 'none'
        otherTeam.style.display = 'none'
        // display arrows
        psArrow.style.display = 'block'
        hdArrow.style.display = 'none'
        wmArrow.style.display = 'none'
        uspsArrow.style.display = 'none'
        otherArrow.style.display = 'none'
        // border styles while selected
        psBtn.style.border = 'thick solid #ff3300'
        psBtn.style.borderRadius = '25px'
        // turn other borders off
        hdBtn.style.border = 'none'
        wmBtn.style.border = 'none'
        uspsBtn.style.border = 'none'
        otherBtn.style.border = 'none'
    } else {
        psTeam.style.display = 'none'
        psArrow.style.display = 'none'
        // turn border off
        psBtn.style.border = 'none'
    }
}

var otherShow = function() {
    if(otherTeam.style.display === 'none') {
        // display containers
        otherTeam.style.display = 'block'
        psTeam.style.display = 'none'
        hdTeam.style.display = 'none'
        uspsTeam.style.display = 'none'
        wmTeam.style.display = 'none'
        // display arrows
        otherArrow.style.display = 'block'
        hdArrow.style.display = 'none'
        wmArrow.style.display = 'none'
        uspsArrow.style.display = 'none'
        psArrow.style.display = 'none'
        otherBtn.style.border = 'thick solid #99ccff'
        otherBtn.style.borderRadius = '25px'
        // turn other borders off
        hdBtn.style.border = 'none'
        wmBtn.style.border = 'none'
        uspsBtn.style.border = 'none'
        psBtn.style.border = 'none'
    } else {
        otherTeam.style.display = 'none'
        otherArrow.style.display = 'none'
        // turn border off
        otherBtn.style.border = 'none'
    }
}

