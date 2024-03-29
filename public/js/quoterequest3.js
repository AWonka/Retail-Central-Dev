// general document elements/settings
const formEl = document.querySelector('form');
const dateEl = document.querySelector('.date-time');
const productFormEl = document.querySelector('.product-form');
const imageForm = document.querySelector('.image-form');
const element = document.getElementById('element-to-print');
const opt = {
    margin: 3,
    jsPDF: { format: 'a3'}
};

// drop down selections first section
const fNameEl = document.getElementById('fName');
const productCategory = document.getElementById('pCategory');
const newOrExistingLabel = document.querySelector('.new-or-existing-label');
const newOrExistingEl = document.getElementById('newOrExisting');
const rawOrFinishedLabel = document.querySelector('.raw-or-finished-label');
const rawOrFinishedEl = document.getElementById('rawOrFinished');
const existingItemNumberLabel = document.querySelector('.existing-item-number-label');
const existingItemNumberEl = document.getElementById('existingItemNumber');

// progress bar / tracking
const progressEl = document.querySelector('.progress-tracker');
const numberEl = document.querySelector('.progress-number');
let trackArr = [];
let valueCount = 0;
progressEl.style.width = 0 + '%';
numberEl.textContent = 0 + '%';
function addTracking() {
    trackArr = [];
    trackEl.forEach((e) => {
        trackArr.push(e);
        if (e.value.length > 0) {
            e.classList.add('done');
        }
        if (e.value.length === 0) {
            e.classList.remove('done');
        }
        updateProgress(e);
    })
    console.log(trackArr.length);
};
setInterval(() => {
    trackEl = document.querySelectorAll('.track');
    addTracking();
}, 1000);

// Date times
const getDate = () => {
    let today = new Date();
    let date = today.toLocaleDateString();
    let time = today.toLocaleTimeString();
    return date+' '+time;
}
dateEl.innerText = getDate();

// rest of code
function submitForm() {
    let liTest = document.querySelectorAll('.required');
    let liData = document.querySelectorAll('.track');
    const csvBtn = document.createElement('button');
    const newTable = document.createElement('table');
    const headerRow = document.createElement('tr');
    const tableRow = document.createElement('tr');
    document.getElementById('html-data').appendChild(newTable);
    newTable.appendChild(headerRow);
    newTable.appendChild(tableRow);
    document.getElementById('html-data-btns').appendChild(csvBtn);
    csvBtn.innerHTML = 'Export CSV';
    csvBtn.style.backgroundColor = '#fff';
    csvBtn.style.borderRadius = '5px';
    csvBtn.style.transition = '0.2s';
    csvBtn.onmouseover = () => {csvBtn.style.transform = 'scale(1.2)';};
    csvBtn.onmouseleave = () => {csvBtn.style.transform = 'scale(1)';};
    for (let i=0; i < liTest.length; i++) { 
        const headers = document.createElement('th');
        
        headers.textContent = liTest[i].innerHTML;
        headerRow.appendChild(headers);
    }
    for (let j=0; j < liData.length; j++) {
        const tableData = document.createElement('td');

        tableData.textContent = liData[j].value;
        tableRow.appendChild(tableData);
    }

    csvBtn.addEventListener('click', () => {
        submitFormDataForCSV();
    });
};

function updateProgress(e) {
    let done = document.querySelectorAll('.done');
    let myFormula = Math.floor((done.length / trackArr.length) * 100);
    progressEl.style.width = myFormula + '%';
    numberEl.textContent = myFormula + '%';
};

productCategory.addEventListener('change', () => {
    const value = productCategory.value;
    
    newOrExistingLabel.classList.remove('grayed-out');
    newOrExistingLabel.classList.add('required');
    newOrExistingEl.classList.remove('grayed-out');
    newOrExistingEl.classList.add('track');
    newOrExistingEl.disabled = false;
    newOrExistingEl.required = true;
    rawOrFinishedLabel.classList.remove('grayed-out');
    rawOrFinishedLabel.classList.add('required');
    rawOrFinishedEl.classList.remove('grayed-out');
    rawOrFinishedEl.classList.add('track');
    rawOrFinishedEl.disabled = false;
    rawOrFinishedEl.required = true;

    
    generateProductForm(value);
});

newOrExistingEl.addEventListener('change', () => {
    const value = newOrExistingEl.value;

    if (value === 'Existing') {
        existingItemNumberLabel.classList.remove('grayed-out');
        existingItemNumberLabel.classList.add('required');
        existingItemNumberEl.classList.remove('grayed-out');
        existingItemNumberEl.classList.add('track');
        existingItemNumberEl.disabled = false;
        existingItemNumberEl.required = true;
    }
    else {
        existingItemNumberLabel.classList.add('grayed-out');
        existingItemNumberLabel.classList.remove('required');
        existingItemNumberEl.classList.add('grayed-out');
        existingItemNumberEl.classList.remove('track');
        existingItemNumberEl.value = '';
        existingItemNumberEl.disabled = true;
        existingItemNumberEl.required = false;
    }
});

function generateProductForm(e) {
    productFormEl.innerHTML = ``;
    // Mailer
    if (e === 'Mailers') {

        productFormEl.innerHTML = `
        <div class="section">
                <div class="section-header">
                    <h2>Product Information: <span class="product-type">MAILERS</span></h2>
                </div>
                <div class="section-information product-information-mailers">
                    <ul>
                        <li>
                            <label class="required" for="">Product Size</label>
                            <select class="track" name="productSizeMailer" id="productSizeMailer" required>
                                <option value="" disabled selected>-</option>
                                <option value="#0">#0 (6.5 x 9)</option>
                                <option value="#2">#2 (8.5 x 12)</option>
                                <option value="#5">#5 (16 x 10.5)</option>
                                <option value="#6">#6 (12.5 x 19)</option>
                                <option value="Other">Other</option>
                            </select>
                        </li>
                        <li>
                            <label class="product-size-mailer-other-label" for=""></label>
                            <input class="grayed-out" type="text" id="productSizeMailerOther" name="productSizeMailerOther" autocomplete="off" placeholder="List Size" disabled>
                        </li>
                        <li>
                            <label class="required" for="">Mailer Type</label>
                            <select class="track" name="mailerType" id="mailerType" required>
                                <option value="" disabled selected>-</option>
                                <option value="Poly">Poly</option>
                                <option value="Poly-Bubble">Poly-Bubble</option>
                                <option value="Paper-White">Paper (white)</option>
                                <option value="Paper-White-Bubble">Paper (white)-Bubble</option>
                                <option value="Paper-Goldenrod">Paper (goldenrod)</option>
                                <option value="Paper-Goldenrod-Bubble">Paper (goldrenrod)-Bubble</option>
                                <option value="Paper-Natural-Kraft">Paper (natural kraft)</option>
                                <option value="Paper-Natural-Kraft-Bubble">Paper (natural kraft)-Bubble</option>
                                <option value="Other">Other</option>
                            </select>
                        </li>
                        <li>
                            <label class="mailerTypeOtherLabel" for=""></label>
                            <input class="grayed-out" type="text" id="mailerTypeOther" name="mailerTypeOther" autocomplete="off" placeholder="List Type" disabled>
                        </li>
                        <li>
                            <label class="required" for="">Plain or Printed?</label>
                            <select class="track" name="plainOrPrintedMailer" id="plainOrPrintedMailer" required>
                                <option value="" disabled selected>-</option>
                                <option value="Plain">Plain</option>
                                <option value="Printed">Printed</option>
                            </select>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <label class="mailer-need-printed-label grayed-out" for="">Upload Product Design Here:</label>
                        <input class="grayed-out" type="file" id="mailerNeedPrintedBtn" name="MailerNeedPrintedBtn" disabled>
                        </li>
                        <li>
                            <label class="finished-product-mailer-label grayed-out" for="">Finished Product</label>
                            <select class="grayed-out" name="finishedProductMailer" id="finishedProductMailer" disabled>
                                <option value="" disabled selected>-</option>
                                <option value="Pieces">Individual (PCS)</option>
                                <option value="Shrink Pack">Shrink (PACK)</option>
                                <option value="Banded Pack">Banded (PACK)</option>
                            </select>
                        </li>
                        <li>
                            <label class="pcsPerPackMailerLabel grayed-out" for=""></label>
                            <input class="grayed-out" type="text" id="pcsPerPackMailer" name="pcsPerPackMailer" autocomplete="off" placeholder="# OF PCS PER PACK" disabled>
                        </li>
                        <li>
                            <label class="pack-need-label-mailer-label grayed-out" for="">Packaging Label Needed?</label>
                            <select class="grayed-out" name="packNeedLabelMailer" id="packNeedLabelMailer" disabled>
                                <option value="" disabled selected>-</option>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                            </select>
                        </li>
                        <li>
                            <label class="pack-needs-label-label grayed-out" for="">Upload Packaging Label Design Here:</label>
                            <input class="grayed-out" type="file" id="packNeedsLabelBtn" name="packNeedsLabelBtn" disabled>
                        </li>
                    </ul>
                </div> 
            </div>
            
            <div class="for-finished-mailer"></div>

            <div class="section html2pdf__page-break">
                <div class="section-header">
                    <h2>Shipping Information</h2>
                </div>
                <div class="section-information shipping-info">
                    <ul>
                        <li class="li-non-radio">
                            <label class="required" for="">Shipping Type</label>
                            <select class="track" name="shipToType" id="shipToType" required>
                                <option value="" disabled selected>-</option>
                                <option value="DC">DC</option>
                                <option value="Other Address">Other Address</option>
                                <option value="Dropship">Dropship</option>
                                <option value="Customer Pickup">Customer Pickup</option>
                            </select>
                        </li>
                        <li class="li-non-radio">
                            <label class="ship-to-address-label" for="" hidden=true></label>
                            <input class="" type="text" id="shipToAddress" name="shipToAddress" autocomplete="off" placeholder="Enter Address" hidden=true>
                            <label class="ship-to-dropship-label required" for="" hidden=true></label>
                            <input class="" type="text" id="shipToDropship" name="shipToDropship" autocomplete="off" placeholder="Enter Dropship" hidden=true>
                            <label class="ship-to-pickup-label required" for="" hidden=true></label>
                            <input class="" type="text" id="shipToPickup" name="shipToPickup" autocomplete="off" placeholder="Who will pick it up?" hidden=true>
                        </li>
                    </ul>
                </div>
                <div class="ship-to-dc-div" hidden="true">
                            <h2>Select DC:</h2>
                            <ul>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">47 Conyers</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">TX Dallas</label> 
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">RC Ontario</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">UC Stockton</label> 
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">C8 Lathrop</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">KW Kent</label>   
                                    </li>
                                     <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">R3 Dayton NJ</label> 
                                     </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">DO Dayton OH</label> 
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">VO Vandalia</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">WO Wapakoneta</label>
                                    </li>   
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">GT Garland</label> 
                                    </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">AP Allentown</label>   
                                    </li>
                                     <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">CP Carlisle</label> 
                                     </li>
                                    <li>
                                        <input type="checkbox" id="" name="shipToDc">
                                        <label for="">NG Newnan</label> 
                                    </li>
                            </ul>
                        </div>
            </div>

            <div class="image-form">
                <div class="section image-section" hidden=true>
                    <div class="section-header">
                        <h2>Images</h2>
                    </div>
                    <div class="section-information section-images">
                        <ul>
                            <li>
                                <label for="">Mailer Image</label>
                                <img class="mailer-img-1" src="" alt="">
                            </li>
                            <li>
                                <label for="">Packaging Label</label>
                                <img class="mailer-img-2" src="" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
        generateMailerScripts();
        generateShippingScripts();
    }
};

function generateShippingScripts() {
    const shipToDcEl = document.querySelector('.ship-to-dc-div');
    const shipToTypeEl = document.getElementById('shipToType');
    const shipToDcLabel = document.querySelector('.ship-to-dc-label');
    // const shipToDcEl = document.getElementById('shipToDc');
    const shipToAddressLabel = document.querySelector('.ship-to-address-label');
    const shipToAddressEl = document.getElementById('shipToAddress');
    const shipToDropshipLabel = document.querySelector('.ship-to-dropship-label');
    const shipToDropshipEl = document.getElementById('shipToDropship');
    const shipToPickupLabel = document.querySelector('.ship-to-pickup-label');
    const shipToPickupEl = document.getElementById('shipToPickup');

    shipToTypeEl.addEventListener('change', () => {
        const value = shipToTypeEl.value;

        if (value === 'DC') {
            shipToDcEl.hidden = false;
            shipToAddressLabel.classList.remove('required');
            shipToAddressLabel.hidden = true;
            shipToAddressEl.classList.remove('track');
            shipToAddressEl.value = '';
            shipToAddressEl.disabled = true;
            shipToAddressEl.hidden = true;
            shipToAddressEl.required = false;
            shipToDropshipLabel.classList.remove('required');
            shipToDropshipLabel.hidden = true;
            shipToDropshipEl.classList.remove('track');
            shipToDropshipEl.value = '';
            shipToDropshipEl.hidden = true;
            shipToDropshipEl.disabled = true;
            shipToDropshipEl.required = false;
            shipToPickupLabel.classList.remove('required');
            shipToPickupLabel.hidden = true;
            shipToPickupEl.classList.remove('track');
            shipToPickupEl.value = '';
            shipToPickupEl.hidden = true;
            shipToPickupEl.disabled = true;
            shipToPickupEl.required = false;
        }
        else if (value === 'Other Address') {
            shipToDcEl.hidden = true;
            shipToAddressLabel.classList.add('required');
            shipToAddressLabel.hidden = false;
            shipToAddressEl.classList.add('track');
            shipToAddressEl.disabled = false;
            shipToAddressEl.hidden = false;
            shipToAddressEl.required = true;
            shipToDropshipLabel.classList.remove('required');
            shipToDropshipLabel.hidden = true;
            shipToDropshipEl.classList.remove('track');
            shipToDropshipEl.value = '';
            shipToDropshipEl.hidden = true;
            shipToDropshipEl.disabled = true;
            shipToDropshipEl.required = false;
            shipToPickupLabel.classList.remove('required');
            shipToPickupLabel.hidden = true;
            shipToPickupEl.classList.remove('track');
            shipToPickupEl.value = '';
            shipToPickupEl.hidden = true;
            shipToPickupEl.disabled = true;
            shipToPickupEl.required = false;
        }
        else if (value === 'Dropship') {
            shipToDcEl.hidden = true;
            shipToAddressLabel.classList.remove('required');
            shipToAddressLabel.hidden = true;
            shipToAddressEl.classList.remove('track');
            shipToAddressEl.value = '';
            shipToAddressEl.disabled = true;
            shipToAddressEl.hidden = true;
            shipToAddressEl.required = false;
            shipToDropshipLabel.classList.add('required');
            shipToDropshipLabel.hidden = false;
            shipToDropshipEl.classList.add('track');
            shipToDropshipEl.hidden = false;
            shipToDropshipEl.disabled = false;
            shipToDropshipEl.required = true;
            shipToPickupLabel.classList.remove('required');
            shipToPickupLabel.hidden = true;
            shipToPickupEl.classList.remove('track');
            shipToPickupEl.value = '';
            shipToPickupEl.hidden = true;
            shipToPickupEl.disabled = true;
            shipToPickupEl.required = false;
        }
        else {
            shipToDcEl.hidden = true;
            shipToAddressLabel.classList.remove('required');
            shipToAddressLabel.hidden = true;
            shipToAddressEl.classList.remove('track');
            shipToAddressEl.value = '';
            shipToAddressEl.disabled = true;
            shipToAddressEl.hidden = true;
            shipToAddressEl.required = false;
            shipToDropshipLabel.classList.remove('required');
            shipToDropshipLabel.hidden = true;
            shipToDropshipEl.classList.remove('track');
            shipToDropshipEl.value = '';
            shipToDropshipEl.hidden = true;
            shipToDropshipEl.disabled = true;
            shipToDropshipEl.required = false;
            shipToPickupLabel.classList.add('required');
            shipToPickupLabel.hidden = false;
            shipToPickupEl.classList.add('track');
            shipToPickupEl.hidden = false;
            shipToPickupEl.disabled = false;
            shipToPickupEl.required = true;
        }
    });
}

function generateMailerScripts() {
        const forFinishedMailerEl = document.querySelector('.for-finished-mailer');
        const productSizeMailerEl = document.getElementById('productSizeMailer');
        const productSizeMailerOtherLabel = document.querySelector('.product-size-mailer-other-label');
        const productSizeMailerOtherEl = document.getElementById('productSizeMailerOther');
        const mailerTypeEl = document.getElementById('mailerType');
        const mailerTypeOtherLabel = document.querySelector('.mailerTypeOtherLabel');
        const mailerTypeOtherEl = document.getElementById('mailerTypeOther');
        const plainOrPrintedMailerEl = document.getElementById('plainOrPrintedMailer');
        const mailerNeedPrintedLabelLabel = document.querySelector('.mailer-need-printed-label');
        const mailerNeedPrintedEl = document.getElementById('mailerNeedPrintedBtn');
        const finishedProductMailerLabel = document.querySelector('.finished-product-mailer-label');
        const finishedProductMailerEl = document.getElementById('finishedProductMailer');
        const packNeedLabelMailerLabel = document.querySelector('.pack-need-label-mailer-label');
        const packNeedLabelMailerEl = document.getElementById('packNeedLabelMailer');
        const pcsPerPackMailerLabel = document.querySelector('.pcsPerPackMailerLabel');
        const pcsPerPackMailerEl = document.getElementById('pcsPerPackMailer');
        const packNeedsLabelLabel = document.querySelector('.pack-needs-label-label');
        const packNeedsLabelBtn = document.getElementById('packNeedsLabelBtn');
        const imageSection = document.querySelector('.image-section');

        let mailerImgOne = document.querySelector('.mailer-img-1');
        let mailerImgTwo = document.querySelector('.mailer-img-2');

        rawOrFinishedEl.addEventListener('change', () => {
            const value = rawOrFinishedEl.value;
        
            if (value === 'Finished') {
                finishedProductMailerLabel.classList.remove('grayed-out');
                finishedProductMailerLabel.classList.add('required');
                finishedProductMailerEl.classList.remove('grayed-out');
                finishedProductMailerEl.classList.add('track');
                finishedProductMailerEl.disabled = false;
                finishedProductMailerEl.required = true;
                packNeedLabelMailerLabel.classList.remove('grayed-out');
                packNeedLabelMailerLabel.classList.add('required');
                packNeedLabelMailerEl.classList.remove('grayed-out');
                packNeedLabelMailerEl.classList.add('track');
                packNeedLabelMailerEl.disabled = false;
                packNeedLabelMailerEl.required = true;
                forFinishedMailerEl.innerHTML = `
                <div class="section">
                    <div class="section-header">
                        <h2>Packaging: Finished Item</h2>
                    </div>
                    <div class="section-information packaging-finished-mailers">
                        <ul>
                            <li class="li-non-radio">
                                <label class="required" for="">Case/Packout Type:</label>
                                <select class="track" name="" id="casePackoutTypeMailer" required>
                                    <option value="" disabled selected>-</option>
                                    <option value="RSC/OPK">RSC/OPK</option>
                                    <option value="SRP">SRP</option>
                                    <option value="Tray & HSC">Tray & HSC</option>
                                    <option value="Display">Display</option>
                                    <option value="Other">Other</option>
                                </select>
                            </li>
                            <li class="li-non-radio">
                                <label class="grayed-out casePackoutTypeMailerOtherLabel" for=""></label>
                                <input class="grayed-out" type="text" id="casePackoutTypeMailerOther" placeholder="Other Packout type" autocomplete="off" disabled>
                            </li>
                            <li class="li-non-radio">
                                <label class="required" for=""># of pcs per packout type</label>
                                <input class="track" type="text" id="pcsPerPackoutTypeMailer" placeholder="" autocomplete="off" required>
                            </li>
                            <li class="li-non-radio">
                                <label class="required" for=""># of packs per case</label>
                                <input class="track" type="text" id="packsPerCaseMailer" placeholder="" autocomplete="off" required>
                            </li>
                            <li class="li-non-radio">
                                <label class="required" for="">Is RSC/OPK labeled or printed?</label>
                                <select class="track" name="" id="rscLabeledOrPrintedMailer" required>
                                    <option value="" disabled selected>-</option>
                                    <option value="Labeled">Labeled</option>
                                    <option value="Printed">Printed</option>
                                </select>
                            </li>
                        </ul>
                        <ul>
                            <li class="li-radio">
                                <label class="required" for="">Upload image or Teamwork link?</label>
                                <input class="track" type="radio" id="" name="imageOrTeamworkSpecMailer" value="" required>
                                <label for="image">Upload Img</label>
                                <input class="track" type="radio" id="" name="imageOrTeamworkSpecMailer" value="" required>
                                <label for="teamwork">Teamwork Link</label>
                            </li>
                            <li class="li-non-radio">
                                <label class="casePackoutSpecMailerBtnLabel grayed-out" for="">Upload case/packout spec here:</label>
                                <input class="grayed-out" type="file" id="casePackoutSpecMailerBtn" name="casePackoutSpecMailerBtn" disabled>
                            </li>
                            <li class="li-non-radio">
                                <label class="casePackoutSpecMailerTeamworkLabel" for=""></label>
                                <input class="grayed-out" type="text" id="casePackoutSpecMailerTeamwork" placeholder="Teamwork Link" autocomplete="off" disabled>
                            </li>
                            <li class="li-radio">
                                <label class="required" for="">Upload image or Teamwork link?</label>
                                <input class="track" type="radio" id="" name="imageOrTeamworkArtMailer" value="" required>
                                <label for="image">Upload Img</label>
                                <input class="track" type="radio" id="" name="imageOrTeamworkArtMailer" value="" required>
                                <label for="teamwork">Teamwork Link</label>
                            </li>
                            <li class="li-non-radio">
                                <label class="casePackoutArtMailerBtnLabel grayed-out" for="">Upload case/packout Art here:</label>
                                <input class="grayed-out" type="file" id="casePackoutArtMailerBtn" name="casePackoutArtMailerBtn" disabled>
                            </li>
                            <li class="li-non-radio">
                                <label class="casePackoutArtMailerTeamworkLabel" for=""></label>
                                <input class="grayed-out" type="text" id="casePackoutArtMailerTeamwork" placeholder="Teamwork Link" autocomplete="off" disabled>
                            </li>
                        </ul>
                    </div>
                </div>
                `
                const casePackoutTypeMailerEl = document.getElementById('casePackoutTypeMailer');
                const casePackoutTypeMailerOtherLabelEl = document.querySelector('.casePackoutTypeMailerOtherLabel');
                const casePackoutTypeMailerOtherEl = document.getElementById('casePackoutTypeMailerOther');
                const rscLabeledOrPrintedMailerEl = document.getElementById('rscLabeledOrPrintedMailer');
                const imageOrTeamworkSpecMailerEl = document.getElementsByName('imageOrTeamworkSpecMailer');
                const casePackoutSpecMailerBtnLabel = document.querySelector('.casePackoutSpecMailerBtnLabel');
                const casePackoutSpecMailerBtn = document.getElementById('casePackoutSpecMailerBtn');
                const casePackoutSpecMailerTeamworkLabel = document.querySelector('.casePackoutSpecMailerTeamworkLabel');
                const casePackoutSpecMailerTeamworkEl = document.getElementById('casePackoutSpecMailerTeamwork');
                const imageOrTeamworkArtMailerEl = document.getElementsByName('imageOrTeamworkArtMailer');
                const casePackoutArtMailerBtnLabel = document.querySelector('.casePackoutArtMailerBtnLabel');
                const casePackoutArtMailerBtn = document.getElementById('casePackoutArtMailerBtn');
                const casePackoutArtMailerTeamworkLabel = document.querySelector('.casePackoutArtMailerTeamworkLabel');
                const casePackoutArtMailerTeamworkEl = document.getElementById('casePackoutArtMailerTeamwork');
                let arrOne = [];
                let arrTwo = [];

                for (i=0; i < imageOrTeamworkSpecMailerEl.length; i++) {
                    arrOne.push(imageOrTeamworkSpecMailerEl[i]);
                };

                for (i=0; i < imageOrTeamworkArtMailerEl.length; i++) {
                    arrTwo.push(imageOrTeamworkArtMailerEl[i]);
                };

                casePackoutTypeMailerEl.addEventListener('click', () => {
                    if (casePackoutTypeMailerEl.value === 'Other') {
                        casePackoutTypeMailerOtherLabelEl.classList.remove('grayed-out');
                        casePackoutTypeMailerOtherLabelEl.classList.add('required');
                        casePackoutTypeMailerOtherEl.classList.remove('grayed-out');
                        casePackoutTypeMailerOtherEl.classList.add('track');
                        casePackoutTypeMailerOtherEl.disabled = false;
                        casePackoutTypeMailerOtherEl.required = true;
                    }
                    else {
                        casePackoutTypeMailerOtherLabelEl.classList.add('grayed-out');
                        casePackoutTypeMailerOtherLabelEl.classList.remove('required');
                        casePackoutTypeMailerOtherEl.classList.add('grayed-out');
                        casePackoutTypeMailerOtherEl.classList.remove('track', 'done');
                        casePackoutTypeMailerOtherEl.disabled = true;
                        casePackoutTypeMailerOtherEl.required = false;
                        casePackoutTypeMailerOtherEl.value = '';
                    }
                });
                
                arrOne.forEach((e) => {
                    e.addEventListener('click', (j) => {
                        if(j.target === arrOne[0]) {
                            casePackoutSpecMailerBtnLabel.classList.remove('grayed-out');
                            casePackoutSpecMailerBtnLabel.classList.add('required');
                            casePackoutSpecMailerBtn.classList.remove('grayed-out');
                            casePackoutSpecMailerBtn.classList.add('track');
                            casePackoutSpecMailerBtn.disabled = false;
                            casePackoutSpecMailerBtn.required = true;
                            casePackoutSpecMailerTeamworkLabel.classList.add('grayed-out');
                            casePackoutSpecMailerTeamworkLabel.classList.remove('required');
                            casePackoutSpecMailerTeamworkEl.classList.add('grayed-out');
                            casePackoutSpecMailerTeamworkEl.classList.remove('track', 'done');
                            casePackoutSpecMailerTeamworkEl.disabled = true;
                            casePackoutSpecMailerTeamworkEl.required = false;
                            casePackoutSpecMailerTeamworkEl.value = '';
                        }
                        else {
                            casePackoutSpecMailerTeamworkLabel.classList.remove('grayed-out');
                            casePackoutSpecMailerTeamworkLabel.classList.add('required');
                            casePackoutSpecMailerTeamworkEl.classList.remove('grayed-out');
                            casePackoutSpecMailerTeamworkEl.classList.add('track');
                            casePackoutSpecMailerTeamworkEl.disabled = false;
                            casePackoutSpecMailerTeamworkEl.required = true;
                            casePackoutSpecMailerBtnLabel.classList.add('grayed-out');
                            casePackoutSpecMailerBtnLabel.classList.remove('required');
                            casePackoutSpecMailerBtn.classList.add('grayed-out');
                            casePackoutSpecMailerBtn.classList.remove('track', 'done');
                            casePackoutSpecMailerBtn.disabled = true;
                            casePackoutSpecMailerBtn.required = false;
                            casePackoutSpecMailerBtn.value = '';
                        }
                    });
                });

                arrTwo.forEach((e) => {
                    e.addEventListener('click', (j) => {
                        if(j.target === arrTwo[0]) {
                            casePackoutArtMailerBtnLabel.classList.remove('grayed-out');
                            casePackoutArtMailerBtnLabel.classList.add('required');
                            casePackoutArtMailerBtn.classList.remove('grayed-out');
                            casePackoutArtMailerBtn.classList.add('track');
                            casePackoutArtMailerBtn.disabled = false;
                            casePackoutArtMailerBtn.required = true;
                            casePackoutArtMailerTeamworkLabel.classList.add('grayed-out');
                            casePackoutArtMailerTeamworkLabel.classList.remove('required');
                            casePackoutArtMailerTeamworkEl.classList.add('grayed-out');
                            casePackoutArtMailerTeamworkEl.classList.remove('track', 'done');
                            casePackoutArtMailerTeamworkEl.disabled = true;
                            casePackoutArtMailerTeamworkEl.required = false;
                            casePackoutArtMailerTeamworkEl.value = '';
                        }
                        else {
                            casePackoutArtMailerTeamworkLabel.classList.remove('grayed-out');
                            casePackoutArtMailerTeamworkLabel.classList.add('required');
                            casePackoutArtMailerTeamworkEl.classList.remove('grayed-out');
                            casePackoutArtMailerTeamworkEl.classList.add('track');
                            casePackoutArtMailerTeamworkEl.disabled = false;
                            casePackoutArtMailerTeamworkEl.value = '';
                            casePackoutArtMailerBtnLabel.classList.add('grayed-out');
                            casePackoutArtMailerBtnLabel.classList.remove('required');
                            casePackoutArtMailerBtn.classList.add('grayed-out');
                            casePackoutArtMailerBtn.classList.remove('track', 'done');
                            casePackoutArtMailerBtn.disabled = true;
                            casePackoutArtMailerBtn.required = false;
                            casePackoutArtMailerBtn.value = '';
                        }
                    });
                });

            }
            else {
                finishedProductMailerLabel.classList.add('grayed-out');
                finishedProductMailerLabel.classList.remove('required');
                finishedProductMailerEl.classList.add('grayed-out');
                finishedProductMailerEl.classList.remove('track');
                finishedProductMailerEl.value = '';
                finishedProductMailerEl.disabled = true;
                finishedProductMailerEl.required = false;
                packNeedLabelMailerLabel.classList.add('grayed-out');
                packNeedLabelMailerLabel.classList.remove('required');
                packNeedLabelMailerEl.classList.add('grayed-out');
                packNeedLabelMailerEl.classList.remove('track');
                packNeedLabelMailerEl.value = '';
                packNeedLabelMailerEl.disabled = true;
                packNeedLabelMailerEl.required = false;
                pcsPerPackMailerLabel.classList.add('grayed-out');
                pcsPerPackMailerLabel.classList.remove('required');
                pcsPerPackMailerEl.classList.add('grayed-out');
                pcsPerPackMailerEl.classList.remove('track');
                pcsPerPackMailerEl.value = '';
                pcsPerPackMailerEl.disabled = true;
                pcsPerPackMailerEl.required = false;
                packNeedsLabelLabel.classList.add('grayed-out');
                packNeedsLabelLabel.classList.remove('required');
                packNeedsLabelBtn.classList.add('grayed-out');
                packNeedsLabelBtn.classList.remove('track');
                packNeedsLabelBtn.disabled = true;
                packNeedsLabelBtn.required = false;
                forFinishedMailerEl.innerHTML = ``;
            }
        });

        productSizeMailerEl.addEventListener('change', () => {
            const value = productSizeMailerEl.value;

            if (value === 'Other') {
                productSizeMailerOtherLabel.classList.add('required');
                productSizeMailerOtherEl.classList.remove('grayed-out');
                productSizeMailerOtherEl.classList.add('track');
                productSizeMailerOtherEl.disabled = false;
                productSizeMailerOtherEl.required = true;
            }
            else {
                productSizeMailerOtherLabel.classList.remove('required');
                productSizeMailerOtherEl.classList.add('grayed-out');
                productSizeMailerOtherEl.classList.remove('track');
                productSizeMailerOtherEl.value = '';
                productSizeMailerOtherEl.disabled = true;
                productSizeMailerOtherEl.required = false;
            }
        });

        mailerTypeEl.addEventListener('change', () => {
            const value = mailerTypeEl.value;

            if (value === 'Other') {
                mailerTypeOtherLabel.classList.add('required');
                mailerTypeOtherEl.classList.remove('grayed-out');
                mailerTypeOtherEl.disabled = false;
                mailerTypeOtherEl.required = true;
            }
            else {
                mailerTypeOtherLabel.classList.remove('required');
                mailerTypeOtherEl.classList.add('grayed-out');
                mailerTypeOtherEl.value = '';
                mailerTypeOtherEl.disabled = true;
                mailerTypeOtherEl.required = false;
            }
        });

        plainOrPrintedMailerEl.addEventListener('change', () => {
            const value = plainOrPrintedMailerEl.value;
            

            if (value === 'Printed') {
                mailerNeedPrintedLabelLabel.classList.remove('grayed-out');
                mailerNeedPrintedLabelLabel.classList.add('required');
                mailerNeedPrintedEl.classList.remove('grayed-out');
                mailerNeedPrintedEl.disabled = false;
                mailerNeedPrintedEl.required = true;
            }
            else {
                mailerNeedPrintedLabelLabel.classList.add('grayed-out');
                mailerNeedPrintedLabelLabel.classList.remove('required');
                mailerNeedPrintedEl.classList.add('grayed-out');
                mailerNeedPrintedEl.value = '';
                mailerNeedPrintedEl.disabled = true;
                mailerNeedPrintedEl.required = false;
                mailerImgOne.src = '';
            }
            mailerImgCheck(mailerNeedPrintedEl, packNeedsLabelBtn, imageSection);
        });

        finishedProductMailerEl.addEventListener('change', () => {
            const value = finishedProductMailerEl.value;

            if (value === 'Shrink Pack' || value === 'Banded Pack') {
                pcsPerPackMailerLabel.classList.remove('grayed-out');
                pcsPerPackMailerLabel.classList.add('required');
                pcsPerPackMailerEl.classList.remove('grayed-out');
                pcsPerPackMailerEl.classList.add('track');
                pcsPerPackMailerEl.disabled = false;
                pcsPerPackMailerEl.required = true;
            }
            else {
                pcsPerPackMailerLabel.classList.add('grayed-out');
                pcsPerPackMailerLabel.classList.remove('required');
                pcsPerPackMailerEl.classList.add('grayed-out');
                pcsPerPackMailerEl.classList.remove('track');
                pcsPerPackMailerEl.value = '';
                pcsPerPackMailerEl.disabled = true;
                pcsPerPackMailerEl.required = false;
            }
        });

        packNeedLabelMailerEl.addEventListener('change', () => {
            const value = packNeedLabelMailerEl.value;
            

            if (value === 'Yes') {
                packNeedsLabelLabel.classList.remove('grayed-out');
                packNeedsLabelLabel.classList.add('required');
                packNeedsLabelBtn.classList.remove('grayed-out');
                packNeedsLabelBtn.classList.add('track');
                packNeedsLabelBtn.disabled = false;
                packNeedsLabelBtn.required = true;
            }
            else {
                packNeedsLabelLabel.classList.add('grayed-out');
                packNeedsLabelLabel.classList.remove('required');
                packNeedsLabelBtn.classList.add('grayed-out');
                packNeedsLabelBtn.classList.remove('track');
                packNeedsLabelBtn.value = '';
                packNeedsLabelBtn.disabled = true;
                packNeedsLabelBtn.required = false;
                mailerImgTwo.src = '';
            }
            mailerImgCheck(mailerNeedPrintedEl, packNeedsLabelBtn, imageSection);
        });

        mailerNeedPrintedEl.onchange = function (evt) {
            let tgt = evt.target || window.event.target,
                files = tgt.files;

                if (FileReader && files) {
                    let fr = new FileReader();
                    fr.onload = function () {
                        mailerImgOne.src = fr.result;
                    }
                    fr.readAsDataURL(files[0]);
                }
                else {
                    window.prompt('Error uploading image, please email Jim Knight the image with the project name');
                }
                // mailerImgCheck(mailerImgOne, mailerImgTwo, imageSection);
        };

        packNeedsLabelBtn.onchange = function (evt) {
            let tgt = evt.target || window.event.target,
                files = tgt.files;

                if (FileReader && files) {
                    let fr = new FileReader();
                    fr.onload = function () {
                        mailerImgTwo.src = fr.result;
                    }
                    fr.readAsDataURL(files[0]);
                }
                else {
                    window.prompt('Error uploading image, please email Jim Knight the image with the project name');
                }
                // mailerImgCheck(mailerImgOne, mailerImgTwo, imageSection);
        };
};

function mailerImgCheck(e1, e2, el) {
    if (!e1.disabled || !e2.disabled) {
        el.hidden = false;
    } else {
        el.hidden = true;
    }
};

function generatePdf() {
    let fName = fNameEl.value;
    html2pdf().from(element).set(opt).outputPdf().then(function(pdf) {
        let newPdf = btoa(pdf);
        emailjs.send('service_i2md0e8', 'template_9qnepti', {
            from_name: fName,
            content: newPdf
        });
    },function(error) {
        error(error);
        console.log('FAILED...', error);
    }).save();
};

function sendEmail() {
    window.alert("For the best experience set outlook as your default email(search default apps on windows) and please attached the downloaded file to the email!");
    window.open('mailto:tbilbija@prattindustries.com?cc=lcollins@prattindustries.com&subject=Quote_Request_Filled&body=Quote was created today');
};

function download_csv(csv, filename) {
    let csvFile
    let downloadLink

    csvFile = new Blob([csv], {type: 'text/csv'});

    downloadLink = document.createElement('a');

    downloadLink.download = filename

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.style.display = 'none';

    document.body.appendChild(downloadLink);

    downloadLink.click();

    sendEmail();
};

function export_table_to_csv(html, filename) {
    let csv = [];
    let rows = document.querySelectorAll('table tr');

    for(let i=0; i<rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');
        
        for(let j=0; j<cols.length; j++) 
            row.push(cols[j].textContent);

            csv.push(row.join(','));
        
    }
    download_csv(csv.join('\n'), filename);
};

function submitFormDataForCSV() {
        var html = document.querySelector('table').outerHTML

        export_table_to_csv(html, 'table.csv')
};