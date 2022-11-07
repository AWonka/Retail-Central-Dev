const formEl = document.querySelector('form');
const productForm = document.querySelector('.product-form');

const productCategory = document.getElementById('pCategory');
const newOrExistingLabel = document.querySelector('.new-or-existing-label');
const newOrExistingEl = document.getElementById('newOrExisting');
const rawOrFinishedLabel = document.querySelector('.raw-or-finished-label');
const rawOrFinishedEl = document.getElementById('rawOrFinished');
const existingItemNumberLabel = document.querySelector('.existing-item-number-label');
const existingItemNumberEl = document.getElementById('existingItemNumber');


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
        existingItemNumberEl.classList.remove('grayed-out');
        existingItemNumberEl.classList.add('required', 'track');
        existingItemNumberEl.disabled = false;
        existingItemNumberEl.required = true;
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
                            <label for=""></label>
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
                            <label class="" for=""></label>
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
                            <label for="">Select DC</label>
                            <select class="track" name="shipToDc" id="shipToDc">
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
                            <input class="" type="text" id="shipToAddress" name="shipToAddress" autocomplete="off" placeholder="Enter Address">
                            <input class="" type="text" id="shipToDropship" name="shipToDropship" autocomplete="off" placeholder="Enter Dropship">
                            <input class="" type="text" id="shipToPickup" name="shipToPickup" autocomplete="off" placeholder="Who will pick it up?">
                        </li>
                    </ul>
                </div>
            </div>
        `
        productForm.append(generateDiv);
        generateMailerScripts();
    }
};

function generateMailerScripts() {
        const finishedProductMailerLabel = document.querySelector('.finished-product-mailer-label');
        const finishedProductMailerEl = document.getElementById('finishedProductMailer');
        const packNeedLabelMailerLabel = document.querySelector('.pack-need-label-mailer-label');
        const packNeedLabelMailerEl = document.getElementById('packNeedLabelMailer');
        const pcsPerPackMailerLabel = document.querySelector('.pcsPerPackMailerLabel');
        const pcsPerPackMailerEl = document.getElementById('pcsPerPackMailer');
        const packNeedsLabelLabel = document.querySelector('.pack-needs-label-label');
        const packNeedsLabelBtn = document.getElementById('packNeedsLabelBtn');

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
                packNeedsLabelBtn.disabled = true;
                packNeedsLabelBtn.required = false;
            }
        });
};