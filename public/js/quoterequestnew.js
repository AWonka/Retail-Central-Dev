const form = document.querySelector('form');
const productForms = document.querySelector('.product-forms');

const productCategory = document.getElementById('productCategory');
const newOrComparable = document.getElementById('newOrComparable');
const optProductNameLabel = document.querySelector('.optProductNameLabel');
const optProductName = document.getElementById('optProductName');
const optPartNumberLabel = document.querySelector('.optPartNumberLabel');
const optPartNumber = document.getElementById('optPartNumber');

let addedProductForm = '';
optProductNameLabel.style.display = 'none';
optProductName.hidden = true;
optPartNumberLabel.style.display = 'none';
optPartNumber.hidden = true;

// selecting product type
productCategory.addEventListener('change', () => {
    const value = productCategory.value;
    productForms.innerHTML = '';

    checkProductCategory(value);
    generateProductForm(value);
    updateProgress();
});

// selecting new or comparable item
newOrComparable.addEventListener('change', () => {
    const value = newOrComparable.value;

    if (value === 'new') {
        optProductNameLabel.style.display = 'none';
        optProductName.hidden = true;
        optProductName.required = false;
        optPartNumberLabel.style.display = 'none';
        optPartNumber.hidden = true;
        optPartNumber.required = false;
    }
    if (value === 'comparable') {
        optProductNameLabel.style.display = 'block';
        optProductName.hidden = false;
        optProductName.required = true;
        optPartNumberLabel.style.display = 'block';
        optPartNumber.hidden = false;
        optPartNumber.required = true;
    }
});

function checkProductCategory(value) {
    if (value === "mailers") {
        addedProductForm = 'mailers';
    }
    if (value === "labels") {
        addedProductForm = 'labels';
    }
};

updateProgress();

function updateProgress() {
    const progressEl = document.querySelector('.progress-tracker');
    const trackEl = document.querySelectorAll('.track');
    const trackArr = [];
    let valueCount = 0;
    trackEl.forEach((e) => {
        trackArr.push(e);
        if (!e.value) {
            return;
        } else {
            valueCount++;
        }
    });
    const count = document.querySelectorAll('.track').length;
    const done = Math.floor((valueCount / count) * 100);
    progressEl.style.width = done + "%";
};

// only generates if mailers is selected as product category
function generateMailersScript() {
    const sizeMailer = document.getElementById('sizeMailer');
    const sizeMailerOtherLabel = document.querySelector('.sizeMailerOtherLabel');
    const sizeMailerOther = document.getElementById('sizeMailerOther');
    const mailerMaterial = document.getElementById('mailerMaterial');
    const mailerMaterialPaper = document.getElementById('mailerMaterialPaper');
    const mailerMaterialPaperLabel = document.querySelector('.mailerMaterialPaperLabel');
    const otherMailerMaterial = document.getElementById('otherMailerMaterial');
    const otherMailerMaterialLabel = document.querySelector('.otherMailerMaterialLabel');
    const mailerNeedPrinted = document.getElementById('mailerNeedPrinted');
    const mailerNeedPrintedBtn = document.getElementById('mailerNeedPrintedBtn');
    const mailerFloodCoatLabel = document.querySelector('.mailerFloodCoatLabel');
    const mailerFloodCoat = document.getElementById('mailerFloodCoat');
    const mailerFloodCoatYes = document.getElementById('mailerFloodCoatYes');
    const mailerHowPacked = document.getElementById('mailerHowPacked');
    const mailerHowManyPacks = document.getElementById('mailerHowManyPacks');
    const mailerHowPackaging = document.getElementById('mailerHowPackaging');
    const mailerHowNeedLabel = document.getElementById('mailerHowNeedLabel');
    const mailerHowNeedLabelBtn = document.getElementById('mailerHowNeedLabelBtn');
    const shipToType = document.getElementById('shipToType');
    const shipToDc = document.getElementById('shipToDc');
    const shipToOther = document.getElementById('shipToOther');
    const shipToDropship = document.getElementById('shipToDropship');
    const shipToPickup = document.getElementById('shipToPickup');

    sizeMailerOtherLabel.style.display = 'none';
    mailerMaterialPaper.hidden = true;
    mailerMaterialPaperLabel.style.display = 'none';
    otherMailerMaterial.hidden = true;
    otherMailerMaterialLabel.style.display = 'none';
    mailerNeedPrintedBtn.hidden = true;
    mailerFloodCoatLabel.style.display = 'none';
    mailerFloodCoat.hidden = true;
    mailerFloodCoatYes.hidden = true;
    mailerHowManyPacks.hidden = true;
    mailerHowPackaging.hidden = true;
    mailerHowNeedLabel.hidden = true;
    mailerHowNeedLabelBtn.hidden = true;
    shipToDc.hidden = true;
    shipToOther.hidden = true;
    shipToDropship.hidden = true;
    shipToPickup.hidden = true;

    sizeMailer.addEventListener('change', () => {
        const value = sizeMailer.value;

        if (value === 'other') {
            sizeMailerOtherLabel.style.display = 'block';
            sizeMailerOther.hidden = false;
            sizeMailerOther.required = true;
        }
        else {
            sizeMailerOtherLabel.style.display = 'none';
            sizeMailerOther.hidden = true;
            sizeMailerOther.required = false;
        }
    });

    mailerMaterial.addEventListener('change', () => {
        const value = mailerMaterial.value;

        if (value === 'Paper') {
            mailerMaterialPaper.hidden = false;
            mailerMaterialPaperLabel.style.display = 'block';
            mailerMaterialPaper.required = true;
            otherMailerMaterial.hidden = true;
            otherMailerMaterialLabel.style.display = 'none';
            otherMailerMaterial.required = false;
            otherMailerMaterial.value = '';
        }
        else if (value === 'Other') {
            mailerMaterialPaper.hidden = true;
            mailerMaterialPaperLabel.style.display = 'none';
            mailerMaterialPaper.required = false;
            otherMailerMaterial.hidden = false;
            otherMailerMaterialLabel.style.display = 'block';
            otherMailerMaterial.required = true;
            mailerMaterialPaper.value = '';
        }
        else {
            mailerMaterialPaper.hidden = true;
            mailerMaterialPaperLabel.style.display = 'none';
            mailerMaterialPaper.required = false;
            otherMailerMaterial.hidden = true;
            otherMailerMaterialLabel.style.display = 'none';
            otherMailerMaterial.required = false;
            otherMailerMaterial.value = '';
            mailerMaterialPaper.value = '';
        }
    });

    mailerNeedPrinted.addEventListener('change', () => {
        const value = mailerNeedPrinted.value;

        if (value === 'Yes') {
            mailerNeedPrintedBtn.hidden = false;
            mailerFloodCoatLabel.style.display = 'block';
            mailerFloodCoat.hidden = false;
            mailerFloodCoat.required = true;
        }
        else {
            mailerNeedPrintedBtn.hidden = true;
            mailerFloodCoatLabel.style.display = 'none';
            mailerFloodCoat.hidden = true;
            mailerFloodCoat.required = false;
            mailerFloodCoat.value = '';
            mailerFloodCoatYes.hidden = true;
            mailerFloodCoatYes.required = false;
            mailerFloodCoatYes.value = '';
        }
    });

    mailerFloodCoat.addEventListener('change', () => {
        const value = mailerFloodCoat.value;

        if (value === 'Yes') {
            mailerFloodCoatYes.hidden = false;
            mailerFloodCoatYes.required = true;
        }
        else {
            mailerFloodCoatYes.hidden = true;
            mailerFloodCoatYes.required = false;
            mailerFloodCoatYes.value = '';
        }
    });

    mailerHowPacked.addEventListener('change', () => {
        const value = mailerHowPacked.value;

        if (value === 'In packs') {
            mailerHowManyPacks.hidden = false;
            mailerHowManyPacks.required = true;
            mailerHowPackaging.hidden = false;
            mailerHowPackaging.required = true;
            mailerHowNeedLabel.hidden = false;
            mailerHowNeedLabel.required = true;
        }
        else {
            mailerHowManyPacks.hidden = true;
            mailerHowManyPacks.required = false;
            mailerHowPackaging.hidden = true;
            mailerHowPackaging.required = false;
            mailerHowNeedLabel.hidden = true;
            mailerHowNeedLabel.required = false;
            mailerHowNeedLabelBtn.hidden = true;
            mailerHowManyPacks.value = '';
            mailerHowPackaging.value = '';
            mailerHowNeedLabel.value = '';
        }
    });

    mailerHowNeedLabel.addEventListener('change', () => {
        const value = mailerHowNeedLabel.value;

        if (value === 'Yes') {
            mailerHowNeedLabelBtn.hidden = false;
        }
        else {
            mailerHowNeedLabelBtn.hidden = true;
        }
    });

    shipToType.addEventListener('change', () => {
        const value = shipToType.value;

        if (value === 'DC') {
            shipToDc.hidden = false;
            shipToOther.hidden = true;
            shipToDropship.hidden = true;
            shipToPickup.hidden = true;
            shipToOther.value = '';
            shipToDropship.value = '';
            shipToPickup.value = '';
            shipToDc.required = true;
            shipToOther.required = false;
            shipToDropship.required = false;
            shipToPickup.required = false;
        }
        else if (value === 'Other Address') {
            shipToDc.hidden = true;
            shipToOther.hidden = false;
            shipToDropship.hidden = true;
            shipToPickup.hidden = true;
            shipToDc.value = '';
            shipToDropship.value = '';
            shipToPickup.value = '';
            shipToDc.required = false;
            shipToOther.required = true;
            shipToDropship.required = false;
            shipToPickup.required = false;
        }
        else if (value === 'Dropship') {
            shipToDc.hidden = true;
            shipToOther.hidden = true;
            shipToDropship.hidden = false;
            shipToPickup.hidden = true;
            shipToOther.value = '';
            shipToDc.value = '';
            shipToPickup.value = '';
            shipToDc.required = false;
            shipToOther.required = false;
            shipToDropship.required = true;
            shipToPickup.required = false;
        }
        else {
            shipToDc.hidden = true;
            shipToOther.hidden = true;
            shipToDropship.hidden = true;
            shipToPickup.hidden = false;
            shipToOther.value = '';
            shipToDc.value = '';
            shipToDropship.value = '';
            shipToDc.required = false;
            shipToOther.required = false;
            shipToDropship.required = false;
            shipToPickup.required = true;
        }
    });
};

// generate forms based on selection
function generateProductForm(value) {
    if (value === 'mailers') {
        const generateDiv = document.createElement('div');

        generateDiv.innerHTML = `
        <div class="mailer">
                    <h1>Mailer</h1>

                    <div class="section">
                        <div class="section-header">
                            <h1>Mailer Size & Material</h1>
                        </div>
                        <div class="section-mailer-size-material">
                            <li class="li-fix">
                                <div>
                                <label class="required" for="">What Size Mailer?</label>
                                </div>
                                <div>
                                <select class="track" name="" id="sizeMailer" required>
                                    <option value="" disabled selected>-</option>
                                    <option value="6.5 x 9">0 (6.5 x 9)</option>
                                    <option value="8.5 x 12">2 (8.5 x 12)</option>
                                    <option value="16 x 10.5">5 (16 x 10.5)</option>
                                    <option value="12.5 x 19">6 (12.5 x 19)</option>
                                    <option value="other">Other</option>
                                </select>
                                </div>
                                <div></div>
                                <div class="mailer-selected-other">
                                <label class="required sizeMailerOtherLabel" for=""></label>
                                <input type="text" class="track" id="sizeMailerOther" name="sizeMailerOther" autocomplete="off" placeholder="List Finished Size" hidden=true>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label class="required" for="">Mailer Material</label>
                                </div>
                                <div>
                                    <select class="track" name="mailerMaterial" id="mailerMaterial">
                                        <option value="" disabled selected>-</option>
                                        <option value="Poly">Poly</option>
                                        <option value="Poly-Bubble">Poly-Bubble</option>
                                        <option value="Paper-Bubble">Paper-Bubble</option>
                                        <option value="Paper">Paper</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>    
                                <div class='mailer-selected-other'>
                                    <label class="required mailerMaterialPaperLabel" for=""></label>
                                    <select class="track" name="mailerMaterialPaper" id="mailerMaterialPaper">
                                        <option value="" disabled selected>Paper Type</option>
                                        <option value="White">White</option>
                                        <option value="Goldenrod">Goldenrod</option>
                                        <option value="Natural Kraft">Natural Kraft</option>
                                    </select>
                                </div>
                                <div class="mailer-selected-other">
                                    <label class="required otherMailerMaterialLabel" for=""></label>
                                    <input type="text" class="track" id="otherMailerMaterial" name="otherMailerMaterial" autocomplete="off" placeholder="List Material">
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label class="required" for="">Is your customer open to alternative materials?</label>
                                </div>
                                <div>
                                    <select class="track" name="mailerAlternativeMaterials" id="mailerAlternativeMaterials">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label class="required" for="">Does the mailer need to be printed?</label>
                                </div>
                                <div>
                                    <select class="track" name="mailerNeedPrinted" id="mailerNeedPrinted">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <button id="mailerNeedPrintedBtn">Upload Artwork</button>
                                    <a href=""></a>
                                    <label class="required mailerFloodCoatLabel" for=""></label>
                                    <select class="track" name="" id="mailerFloodCoat">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <input type="text" class="track" id="mailerFloodCoatYes" name="" autocomplete="off" placeholder="PMS Color">
                                </div>
                            </li>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <h1>Mailer Packout</h1>
                        </div>
                        <div class="section-mailer-packout">
                            <li class="li-fix">
                                <div>
                                    <label class="required" for="">How are they being packed out?</label>
                                </div>
                                <div>
                                    <select class="track" name="mailerHowPacked" id="mailerHowPacked">
                                        <option value="" disabled selected>-</option>
                                        <option value="Individual pieces">Individual pieces</option>
                                        <option value="In packs">In packs</option>
                                    </select>
                                    <input type="text" class="track" id="mailerHowManyPacks" name="" autocomplete="off" placeholder="How many pieces per pack?">
                                    <select name="" id="mailerHowPackaging">
                                        <option value="" disabled selected>Packaging</option>
                                        <option value="Shrinked">Shrinked</option>
                                        <option value="Banded">Banded</option>
                                    </select>
                                    <select class="track" name="" id="mailerHowNeedLabel">
                                        <option value="" disabled selected>Does the pack need a label</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <button id="mailerHowNeedLabelBtn">Upload Artwork</button>
                                </div>
                            </li>

                            <li>
                                <label class="required" for="">Unit of Measurement</label>
                                <input type="text" class="track" id="" name="" autocomplete="off" required>
                            </li>

                            <li class="li-fix">
                                <div>
                                    <label class="required" for="">Estimated annual order quantity in pcs</label>
                                </div>
                                <div>
                                    <input type="text" class="track" id="" name="" autocomplete="off" required>
                                </div>
                            </li>

                            <li>
                                <label class="required" for="">Quantity breaks in pcs</label>
                                <input type="text" class="track" id="" name="" autocomplete="off" required>
                            </li>

                            <li>
                                <label class="required" for="">Case Count</label>
                                <input type="text" class="track" id="" name="" autocomplete="off" required>
                            </li>

                            <li>
                                <label class="required" for="">Pallet Count</label>
                                <input type="text" class="track" id="" name="" autocomplete="off" required>
                            </li>

                            <li>
                                <label class="required" for="">TL Quantity</label>
                                <input type="text" class="track" id="" name="" autocomplete="off" required>
                            </li>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <h1>Mailer Shipping Info</h1>
                        </div>
                        <div class="section-shipping-info">
                            <li class="">
                                <label class="required" for="">Ship To:</label>
                                <select class="track" name="" id="shipToType">
                                    <option value="" disabled selected>-</option>
                                    <option value="DC">DC</option>
                                    <option value="Other Address">Other address</option>
                                    <option value="Dropship">Dropship</option>
                                    <option value="Customer Pickup">Customer pickup</option>
                                </select>

                                <select class="track" name="" id="shipToDc">
                                    <option value="" disabled selected>-</option>
                                    <option value="47 Conyers">47 (Conyers)</option>
                                    <option value="TX Dallas">TX (Dallas)</option>
                                    <option value="RC Ontario CA">RC (Ontario CA)</option>
                                    <option value="UC Stockton">UC (Stockton)</option>
                                    <option value="C8 Lathrop">C8 (Lathrop)</option>
                                    <option value="KW Kent">KW (Kent)</option>
                                    <option value="R3 Dayton NJ">R3 (Dayton NJ)</option>
                                    <option value="DO Dayton OH">DO (Dayton OH)</option>
                                    <option value="VO Vandalia">VO (Vandalia)</option>
                                    <option value="WO Wapakoneta">WO (Wapakoneta)</option>
                                    <option value="GT Garland">GT (Garland)</option>
                                    <option value="AP Allentown">AP (Allentown)</option>
                                    <option value="CP Carlisle">CP (Carlisle)</option>
                                    <option value="NG Newnan">NG (Newnan)</option>
                                </select>

                                <input type="text" class="track" id="shipToOther" name="" autocomplete="off" placeholder="Enter Address">
                                <input type="text" class="track" id="shipToDropship" name="" autocomplete="off" placeholder="Enter Dropship">
                                <input type="text" class="track" id="shipToPickup" name="" autocomplete="off" placeholder="Who will pick it up?">
                            </li>
                        </div>
                    </div>

                    <div class='section submit-div'>
                        <button type="submit" class="submit-btn btn-disabled" disabled>Submit</button>
                    </div>
                </div>
        `
        productForms.append(generateDiv);
        generateMailersScript();
    };
    if (value === 'labels') {
        const generateDiv = document.createElement('div');

        generateDiv.innerHTML = `
        <div class="label">
                    <h1>Label</h1>

                    <div class="section">
                        <div class="section-header">
                            <h1>Label Materials and Size</h1>
                        </div>
                        <div class="section-label-material">
                            <li class="li-fix">
                                <div>
                                    <label for="">Finished size?</label>
                                </div>
                                <div>
                                    <input type="text" id="" name="" autocomplete="off" required>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Material?</label>
                                </div>
                                <div>
                                    <input type="text" id="" name="" autocomplete="off" required>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Wind Direction?</label>
                                </div>
                                <div>
                                    <input type="text" id="" name="" autocomplete="off" required>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Is your customer open to alternative materials?</label>
                                </div>
                                <div>
                                    <input type="text" id="" name="" autocomplete="off" required>
                                </div>
                            </li>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <h1>Label Packout</h1>
                        </div>
                        <div class="section-label-packout">
                            <li class="li-fix">
                                <div>
                                    <label for="">Estimated annual order quantity in pcs</label>
                                </div>
                                <div>
                                    <input type="text" id="" name="" autocomplete="off" required>
                                </div>
                            </li>

                            <li>
                                <label for="">Quantity breaks in pcs</label>
                                <input type="text" id="" name="" autocomplete="off" required>
                            </li>

                            <li>
                                <label for="">Case Count</label>
                                <input type="text" id="" name="" autocomplete="off" required>
                            </li>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <h1>Label Shipping Info</h1>
                        </div>
                        <div class="section-shipping-info">
                            <li class="">
                                <label for="">Ship To:</label>
                                <select name="" id="">
                                    <option value="" disabled selected>-</option>
                                    <option value="DC">DC</option>
                                    <option value="Other Address">Other address</option>
                                    <option value="Dropship">Dropship</option>
                                    <option value="Customer Pickup">Customer pickup</option>
                                </select>

                                <select name="" id="">
                                    <option value="" disabled selected>-</option>
                                    <option value="47 Conyers">47 (Conyers)</option>
                                    <option value="TX Dallas">TX (Dallas)</option>
                                    <option value="RC Ontario CA">RC (Ontario CA)</option>
                                    <option value="UC Stockton">UC (Stockton)</option>
                                    <option value="C8 Lathrop">C8 (Lathrop)</option>
                                    <option value="KW Kent">KW (Kent)</option>
                                    <option value="R3 Dayton NJ">R3 (Dayton NJ)</option>
                                    <option value="DO Dayton OH">DO (Dayton OH)</option>
                                    <option value="VO Vandalia">VO (Vandalia)</option>
                                    <option value="WO Wapakoneta">WO (Wapakoneta)</option>
                                    <option value="GT Garland">GT (Garland)</option>
                                    <option value="AP Allentown">AP (Allentown)</option>
                                    <option value="CP Carlisle">CP (Carlisle)</option>
                                    <option value="NG Newnan">NG (Newnan)</option>
                                </select>

                                <input type="text" id="" name="" autocomplete="off" placeholder="Enter Address">
                                <input type="text" id="" name="" autocomplete="off" placeholder="Enter Dropship">
                                <input type="text" id="" name="" autocomplete="off" placeholder="Who will pick it up?">
                            </li>
                        </div>
                    </div>
                </div>
        `
        productForms.append(generateDiv);
    };
};


