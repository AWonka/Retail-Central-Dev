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
optProductName.style.display = 'none';
optPartNumberLabel.style.display = 'none';
optPartNumber.style.display = 'none';

// selecting product type
productCategory.addEventListener('change', () => {
    const value = productCategory.value;
    productForms.innerHTML = '';

    checkProductCategory(value);
    generateProductForm(value);
});

// selecting new or comparable item
newOrComparable.addEventListener('change', () => {
    const value = newOrComparable.value;

    if (value === 'new') {
        optProductName.style.display = 'none';
        optProductName.required = false;
        optPartNumber.style.display = 'none';
        optPartNumber.required = false;
    }
    if (value === 'comparable') {
        optProductName.style.display = 'block';
        optProductName.required = true;
        optPartNumber.style.display = 'block';
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
                                <label for="">What Size Mailer?</label>
                                </div>
                                <div>
                                <select name="" id="sizeMailer" required>
                                    <option value="" disabled selected>-</option>
                                    <option value="6.5 x 9">0 (6.5 x 9)</option>
                                    <option value="8.5 x 12">2 (8.5 x 12)</option>
                                    <option value="16 x 10.5">5 (16 x 10.5)</option>
                                    <option value="12.5 x 19">6 (12.5 x 19)</option>
                                    <option value="Other">Other</option>
                                </select>
                                <input type="text" id="sizeMailerOther" name="sizeMailerOther" autocomplete="off" placeholder="List Finished Size">
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Mailer Material</label>
                                </div>
                                <div>
                                    <select name="mailerMaterial" id="mailerMaterial" required>
                                        <option value="" disabled selected>-</option>
                                        <option value="Poly">Poly</option>
                                        <option value="Poly-Bubble">Poly-Bubble</option>
                                        <option value="Paper-Bubble">Paper-Bubble</option>
                                        <option value="Paper">Paper</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <select name="mailerMaterialPaper" id="mailerMaterialPaper">
                                        <option value="" disabled selected>Paper Type</option>
                                        <option value="White">White</option>
                                        <option value="Goldenrod">Goldenrod</option>
                                        <option value="Natural Kraft">Natural Kraft</option>
                                    </select>
                                    <input type="text" id="otherMailerMaterial" name="otherMailerMaterial" autocomplete="off" placeholder="List Material">
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Is your customer open to alternative materials?</label>
                                </div>
                                <div>
                                    <select name="mailerAlternativeMaterials" id="mailerAlternativeMaterials">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </li>
                            <li class="li-fix">
                                <div>
                                    <label for="">Does the mailer need to be printed?</label>
                                </div>
                                <div>
                                    <select name="mailerNeedPrinted" id="mailerNeedPrinted">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <button>Upload Artwork</button>
                                    <a href="">80000.jpg</a>
                                    <select name="" id="">
                                        <option value="" disabled selected>-</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <input type="text" id="" name="" autocomplete="off" placeholder="PMS Color">
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
                                    <label for="">How are they being packed out?</label>
                                </div>
                                <div>
                                    <select name="mailerHowPacked" id="mailerHowPacked">
                                        <option value="" disabled selected>-</option>
                                        <option value="Individual pieces">Individual pieces</option>
                                        <option value="In packs">In packs</option>
                                    </select>
                                    <input type="text" id="" name="" autocomplete="off" placeholder="How many pieces per pack?">
                                    <select name="" id="">
                                        <option value="" disabled selected>-</option>
                                        <option value="Shrinked">Shrinked</option>
                                        <option value="Banded">Banded</option>
                                    </select>
                                    <select name="" id="">
                                        <option value="" disabled selected></option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <button>Upload Artwork</button>
                                </div>
                            </li>

                            <li>
                                <label for="">Unit of Measurement</label>
                                <input type="text" id="" name="" autocomplete="off" required>
                            </li>

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

                            <li>
                                <label for="">Pallet Count</label>
                                <input type="text" id="" name="" autocomplete="off" required>
                            </li>

                            <li>
                                <label for="">TL Quantity</label>
                                <input type="text" id="" name="" autocomplete="off" required>
                            </li>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <h1>Mailer Shipping Info</h1>
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


