const formEl = document.querySelector('form');
const productForm = document.querySelector('.product-form');
const imageForm = document.querySelector('.image-form');
const element = document.getElementById('element-to-print');
const opt = {
    margin: 2
}

const productCategory = document.getElementById('pCategory');
const newOrExistingLabel = document.querySelector('.new-or-existing-label');
const newOrExistingEl = document.getElementById('newOrExisting');
const rawOrFinishedLabel = document.querySelector('.raw-or-finished-label');
const rawOrFinishedEl = document.getElementById('rawOrFinished');
const existingItemNumberLabel = document.querySelector('.existing-item-number-label');
const existingItemNumberEl = document.getElementById('existingItemNumber');

const progressEl = document.querySelector('.progress-tracker');
const numberEl = document.querySelector('.progress-number');
let trackArr = [];
let valueCount = 0;

progressEl.style.width = 0 + '%';
numberEl.textContent = 0 + '%';

setInterval(() => {
    trackEl = document.querySelectorAll('.track');
    addTracking();
}, 2000);

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
}

function updateProgress(e) {
    let done = document.querySelectorAll('.done');
    let myFormula = Math.floor((done.length / trackArr.length) * 100);
    progressEl.style.width = myFormula + '%';
    numberEl.textContent = myFormula + '%';
};

productCategory.addEventListener('change', () => {
    const value = productCategory.value;
    
    newOrExistingLabel.classList.remove('grayed-out');
    newOrExistingEl.classList.remove('grayed-out');
    newOrExistingEl.classList.add('required', 'track');
    newOrExistingEl.disabled = false;
    newOrExistingEl.required = true;
    rawOrFinishedLabel.classList.remove('grayed-out');
    rawOrFinishedEl.classList.remove('grayed-out');
    rawOrFinishedEl.classList.add('required', 'track');
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
    // Mailer
    if (e === 'Mailers') {
        const generateDiv = document.createElement('div');

        generateDiv.innerHTML = ``;
        generateDiv.innerHTML = `
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

            <div class="section">
                <div class="section-header">
                    <h2>Shipping Information</h2>
                </div>
                <div class="section-information shipping-info">
                    <ul>
                        <li>
                            <label class="required" for="">Shipping Type</label>
                            <select class="track" name="shipToType" id="shipToType" required>
                                <option value="" disabled selected>-</option>
                                <option value="DC">DC</option>
                                <option value="Other Address">Other Address</option>
                                <option value="Dropship">Dropship</option>
                                <option value="Customer Pickup">Customer Pickup</option>
                            </select>
                        </li>
                        <li>
                            <label class="ship-to-dc-label" for="" hidden=true>Select DC</label>
                            <select class="" name="shipToDc" id="shipToDc" hidden=true disabled>
                                <option value="" disabled selected>-</option>
                                <option value="47 Conyers">47 Conyers</option>
                                <option value="TX Dallas">TX Dallas</option>
                                <option value="RC Ontario">RC Ontario</option>
                                <option value="UC Stockton">UC Stockton</option>
                                <option value="C8 Lathrop">C8 Lathrop</option>
                                <option value="KW Kent">KW Kent</option>
                                <option value="R3 Dayton NJ">R3 Dayton NJ</option>
                                <option value="DO Dayton OH">DO Dayton OH</option>
                                <option value="VO Vandalia">VO Vandalia</option>
                                <option value="WO Wapakoneta">WO Wapakoneta</option>
                                <option value="GT Garland">GT Garland</option>
                                <option value="AP Allentown">AP Allentown</option>
                                <option value="CP Carlisle">CP Carlisle</option>
                                <option value="NG Newnan">NG Newnan</option>
                            </select>
                        </li>
                        <li>
                            <label class="ship-to-address-label" for="" hidden=true></label>
                            <input class="" type="text" id="shipToAddress" name="shipToAddress" autocomplete="off" placeholder="Enter Address" hidden=true>
                            <label class="ship-to-dropship-label required" for="" hidden=true></label>
                            <input class="" type="text" id="shipToDropship" name="shipToDropship" autocomplete="off" placeholder="Enter Dropship" hidden=true>
                            <label class="ship-to-pickup-label required" for="" hidden=true></label>
                            <input class="" type="text" id="shipToPickup" name="shipToPickup" autocomplete="off" placeholder="Who will pick it up?" hidden=true>
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
        productForm.append(generateDiv);
        generateMailerScripts();
        generateShippingScripts();
    }
};

function generateShippingScripts() {
    const shipToTypeEl = document.getElementById('shipToType');
    const shipToDcLabel = document.querySelector('.ship-to-dc-label');
    const shipToDcEl = document.getElementById('shipToDc');
    const shipToAddressLabel = document.querySelector('.ship-to-address-label');
    const shipToAddressEl = document.getElementById('shipToAddress');
    const shipToDropshipLabel = document.querySelector('.ship-to-dropship-label');
    const shipToDropshipEl = document.getElementById('shipToDropship');
    const shipToPickupLabel = document.querySelector('.ship-to-pickup-label');
    const shipToPickupEl = document.getElementById('shipToPickup');

    shipToTypeEl.addEventListener('change', () => {
        const value = shipToTypeEl.value;

        if (value === 'DC') {
            shipToDcLabel.hidden = false;
            shipToDcLabel.classList.add('required');
            shipToDcEl.hidden = false;
            shipToDcEl.disabled = false;
            shipToDcEl.required = true;
            shipToDcEl.classList.add('track');
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
            shipToDcLabel.hidden = true;
            shipToDcLabel.classList.remove('required');
            shipToDcEl.value = '';
            shipToDcEl.hidden = true;
            shipToDcEl.disabled = true;
            shipToDcEl.required = false;
            shipToDcEl.classList.remove('track');
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
            shipToDcLabel.hidden = true;
            shipToDcLabel.classList.remove('required');
            shipToDcEl.value = '';
            shipToDcEl.hidden = true;
            shipToDcEl.disabled = true;
            shipToDcEl.required = false;
            shipToDcEl.classList.remove('track');
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
            shipToDcLabel.hidden = true;
            shipToDcLabel.classList.remove('required');
            shipToDcEl.value = '';
            shipToDcEl.hidden = true;
            shipToDcEl.disabled = true;
            shipToDcEl.required = false;
            shipToDcEl.classList.remove('track');
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
    html2pdf().set(opt).from(element).save();
};