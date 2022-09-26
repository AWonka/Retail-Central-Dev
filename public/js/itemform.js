const form = document.querySelector('form');
const extraForms = document.querySelector('.extraformsdiv');

// radio names (specific form names are in their respective functions)
const teamwork = document.getElementsByName('teamwork');

// ids and query selectors (specific form ids are in their respective functions)
const fName = document.getElementById('fname');
const teamworkNameEl = document.querySelector('.teamworkname');
const teamworkNameID = document.getElementById('teamworkname');
const itemTypeEl = document.getElementById('itemtype');

// for generating forms
let addedForm = '';

itemTypeEl.addEventListener('change', () => {
    const value = itemTypeEl.options[itemTypeEl.selectedIndex].value;
    console.log(value)
    checkItemType(value);
});

function checkTeamwork() {
    if (teamwork[1].checked) {
        teamworkNameEl.style.display = 'block';
        teamworkNameID.required = true;
    }
    else {
        teamworkNameEl.style.display = 'none';
        teamworkNameID.required = false;
    }
};

function checkItemType(value) {
    if (value === "Mailers") {
        addedForm = 'Mailers';
        extraForms.innerHTML = ``;
        generateForm();
    }
    if (value === "Labels") {
        addedForm = 'Labels';
        extraForms.innerHTML = ``;
        generateForm();
    }
};

function checkMailerSize() {
    const sizeMailerID = document.getElementById('sizemailerotherinput');
    const sizeMailer = document.getElementsByName('sizemailer');

    if (sizeMailer[4].checked) {
        sizeMailerID.style.display = 'block';
        sizeMailerID.required = true;
    }
    else {
        sizeMailerID.style.display = 'none';
        sizeMailerID.required = false;
    }
};

function checkMailerMaterial() {
    const mailerMaterial = document.getElementsByName('mailermaterial');
    const mailerPaperEl = document.querySelector('.mailerpapertype');
    const mailerMaterialPaper = document.getElementsByName('papertype');
    const mailerMaterialTxtID = document.getElementById('mailermaterialothertxt');

    if (mailerMaterial[3].checked) {
        mailerPaperEl.style.display = 'block';
        mailerMaterialPaper.forEach((e) => {
            e.required = true;
        });

        mailerMaterialTxtID.style.display = 'none';
        mailerMaterialTxtID.required = false;
    }
    else if (mailerMaterial[4].checked) {
        mailerMaterialTxtID.style.display = 'block';
        mailerMaterialTxtID.required = true;

        mailerPaperEl.style.display = 'none';
        mailerMaterialPaper.forEach((e) => {
            e.required = false;
        });
    }
    else {
        mailerMaterialTxtID.style.display = 'none'
        mailerMaterialTxtID.required = false;

        mailerPaperEl.style.display = 'none';
        mailerMaterialPaper.forEach((e) => {
            e.required = false;
        });
    }
};

function checkMailerPrinted() {
    const needPrintedName = document.getElementsByName('needprinted');
    const floodCoatEl = document.querySelector('.floodcoat');
    const mailerArtBtn = document.getElementById('mailerproductartwork');
    const floodCoatName = document.getElementsByName('floodcoat');
    const floodCoatColorTxt = document.getElementById('floodcoatcolor');

    if (needPrintedName[1].checked) {
        floodCoatEl.style.display = 'block';
        mailerArtBtn.style.display = 'block';
        floodCoatName.forEach((e) => {
            e.required = true;
        })
    }
    if (needPrintedName[0].checked) {
        floodCoatEl.style.display = 'none';
        mailerArtBtn.style.display = 'none';
        floodCoatColorTxt.style.display = 'none';
        floodCoatName.forEach((e) => {
            e.required = false;
            e.checked = false;
        })
        floodCoatColorTxt.required = false;
    }
    if (floodCoatName[1].checked) {
        floodCoatColorTxt.style.display = 'block';
        floodCoatColorTxt.required = true;
    }
    if (floodCoatName[0].checked) {
        floodCoatColorTxt.style.display = 'none';
        floodCoatColorTxt.required = false;
    }
};

function checkMailerPackout() {
    const howPackedName = document.getElementsByName('howpacked');
    const packoutEl = document.querySelectorAll('.mailerpackoutrest');
    const packPieces = document.getElementById('piecesperpack');
    const packageType = document.getElementsByName('mailerpackagetype');
    const packLabel = document.getElementsByName('packneedlabel');
    const mailerArtBtn = document.getElementById('mailerpackoutartwork');

    if (howPackedName[1].checked) {
        packoutEl.forEach((e) => {
            e.style.display = 'block';
        })
        packPieces.required = true;
        packageType.forEach((e) => {
            e.required = true;
        })
        packLabel.forEach((e) => {
            e.required = true;
        })
    }
    if (howPackedName[0].checked) {
        packoutEl.forEach((e) => {
            e.style.display = 'none';
        })
        packPieces.required = false;
        packageType.forEach((e) => {
            e.required = false;
            e.checked = false;
        })
        packLabel.forEach((e) => {
            e.required = false;
            e.checked = false;
        })
        mailerArtBtn.style.display = 'none';
    }
    if (packLabel[1].checked) {
        mailerArtBtn.style.display = 'block';
    }
    if (packLabel[0].checked) {
        mailerArtBtn.style.display = 'none';
    }
};

function checkShippingInfo() {
    const shipTo = document.getElementsByName('shipto');
    const shippingDCOther = document.querySelector('.shippingdcother');
    const selectDC = document.querySelector('.selectdc');
    const shipToDC = document.getElementsByName('shippingdc');
    const otherAddress = document.getElementById('otheraddress');

    if (shipTo[0].checked) {
        selectDC.style.display = 'block';
        otherAddress.style.display = 'none';
        otherAddress.required = false;
        otherAddress.value = null;
    }
    else if (shipTo[1].checked) {
        otherAddress.style.display = 'block';
        selectDC.style.display = 'none';
        otherAddress.required = true;
        shipToDC.forEach((e) => {
            e.checked = false;
        })
    }
    else {
        otherAddress.style.display = 'none';
        selectDC.style.display = 'none';
        otherAddress.required = false;
        otherAddress.value = null;
        shipToDC.forEach((e) => {
            e.checked = false;
        })
    }
};

function generateForm() {
    // Generate form for mailers
    if (addedForm === 'Mailers') {
        const mailersDiv = document.createElement('div');

        mailersDiv.innerHTML = `
        <div class="mailers">
        <h1>Mailers</h1>
                    <div class="mailerproduct">
                        <h1>Product</h1>
                        <div class="mailerproduct1">
                            <li>
                                <p>What # mailer?</p>
                                <input type="radio" id="sizemailer1" name="sizemailer" onclick="checkMailerSize()" required>
                                <label for="sizemailer1">0 (6.5 x 9)</label>
                                <input type="radio" id="sizemailer2" name="sizemailer" onclick="checkMailerSize()" required>
                                <label for="sizemailer1">2 (8.5 x 12)</label>
                                <input type="radio" id="sizemailer3" name="sizemailer" onclick="checkMailerSize()" required>
                                <label for="sizemailer1">5 (16 x 10.5)</label>
                                <input type="radio" id="sizemailer4" name="sizemailer" onclick="checkMailerSize()" required>
                                <label for="sizemailer1">6 (12.5 x 19)</label>
                                <input type="radio" id="sizemailerother" onclick="checkMailerSize()" name="sizemailer" required>
                                <label for="sizemailer1">Other</label><br>
                                <input type="text" id="sizemailerotherinput" placeholder="List Finished Size Here">
                            </li>
                        
    
                        
                            <li>
                                <p>Mailer Material</p>
                                <input type="radio" id="mailermaterial" name="mailermaterial" onclick="checkMailerMaterial()">
                                <label for="mailermaterial">Poly</label>
                                <input type="radio" id="mailermaterial" name="mailermaterial" onclick="checkMailerMaterial()">
                                <label for="mailermaterial">Poly-Bubble</label>
                                <input type="radio" id="mailermaterial" name="mailermaterial" onclick="checkMailerMaterial()">
                                <label for="mailermaterial3">Paper-Bubble</label>
                                <input type="radio" id="mailermaterial" name="mailermaterial" onclick="checkMailerMaterial()">
                                <label for="mailermaterial4">Paper</label>
                                <input type="radio" id="mailermaterialother" name="mailermaterial" onclick="checkMailerMaterial()">
                                <label for="mailermaterialother">Other</label>
                            </li>
    
                            <li class="mailerpapertype">
                                <input type="radio" id="papertype" name="papertype">
                                <label for="papertype">White</label>
                                <input type="radio" id="papertype" name="papertype">
                                <label for="papertype">Goldenrod</label>
                                <input type="radio" id="papertype" name="papertype">
                                <label for="papertype">Natural Kraft</label>
                            </li>
    
                            <li>
                                <input type="text" id="mailermaterialothertxt" placeholder="list material" autocomplete="off">
                            </li>
    
                            <li>
                                <p>Is your customer open to alternative materials?</p>
                                <input type="radio" id="alternativematerials" name="alternativematerials">
                                <label for="alternativematerials">No</label>
                                <input type="radio" id="alternativematerials" name="alternativematerials">
                                <label for="alternativematerials">Yes</label>
                            </li>
                        </div>
    
                        <div class="mailerproduct2">
                            <li>
                                <p>Does the mailer need to be printed?</p>
                                <input type="radio" id="needprinted" name="needprinted" onclick="checkMailerPrinted()">
                                <label for="needprinted">No</label>
                                <input type="radio" id="needprinted" name="needprinted" onclick="checkMailerPrinted()">
                                <label for="needprinted">Yes</label>
                            </li>
    
                            <button id="mailerproductartwork">Upload Artwork</button>
    
                            <li class="floodcoat">
                                <p>Flood coat only?</p>
                                <input type="radio" id="floodcoat" name="floodcoat" onclick="checkMailerPrinted()">
                                <label for="floodcoat">No</label>
                                <input type="radio" id="floodcoat" name="floodcoat" onclick="checkMailerPrinted()">
                                <label for="floodcoat">Yes</label>
                                <input type="text" id="floodcoatcolor" placeholder="PMS Color" autocomplete="off">
                            </li>
                        </div>
                    </div>
                    <div class="mailerpackout">
                        <h1>Packout</h1>
                        <div class="mailerpackout1">
                            <li>
                                <p>How are they being packed out?</p>
                                <input type="radio" id="howpacked" name="howpacked" onclick="checkMailerPackout()" required>
                                <label for="howpacked">Individual pieces</label>
                                <input type="radio" id="howpacked" name="howpacked" onclick="checkMailerPackout()" required>
                                <label for="howpacked">In packs</label>
                            </li>    
                            <li class="mailerpackoutrest">
                                <p>How many pieces per pack?</p>
                                <input type="text" id="piecesperpack" placeholder="Piece Quantity" autocomplete="off">
                            </li>
    
                            
                            <li class="mailerpackoutrest">    
                                <p>Packaging</p>
                                <input type="radio" id="mailerpackagetype" name="mailerpackagetype">
                                <label for="mailerpackagetype">Shrinked</label>
                                <input type="radio" id="mailerpackagetype" name="mailerpackagetype">
                                <label for="mailerpackagetype">Banded</label>
                            </li>
                            
                            <li class="mailerpackoutrest">    
                                <p>Does the pack need a label?</p>
                                <input type="radio" id="packneedlabelno" name="packneedlabel" onclick="checkMailerPackout()">
                                <label for="packneedlabelno">No</label>
                                <input type="radio" id="packneedlabelyes" name="packneedlabel" onclick="checkMailerPackout()">
                                <label for="packneedlabelyes">Yes</label>
                            </li>
                            <button id="mailerpackoutartwork">Upload Artwork</button>
                        </div>
                    </div>
    
                    <div class="mailerremaining">
                        <p>UOM?</p>
                        <input type="text" id="maileruom" name="maileruom" placeholder="Unit of Measurement">
    
                        <div class="mailercounts">
                            <p>Estimated annual order quantity in pcs</p>
                            <input type="text" id="mailerannualorder" name="mailerannualorder" placeholder="Annual Quantity" required>
                            <p>Quantity breaks in pcs</p>
                            <input type="text" id="mailerquantitybreak" name="mailerquantitybreak" placeholder="Quantity Breaks" required>
                            <p>Case Count</p>
                            <input type="text" id="mailercasecount" name="mailercasecount" placeholder="Case Count" required>
                            <p>Pallet Count</p>
                            <input type="text" id="mailerpalletcount" name="mailerpalletcount" placeholder="Pallet Count" required>
                            <p>TL Quantity</p>
                            <input type="text" id="mailertlquantity" name="mailertlquantity" placeholder="TL Quantity" required>
                        </div>
                    </div>
    
                    <div class="shipping">
                    <h1>Shipping</h1>

                    <div class="shippinginfo">
                        <li>
                            <p>Ship To</p>
                            <input type="radio" id="shiptodc" name="shipto" onclick="checkShippingInfo()" required>
                            <label for="shiptodc">DC</label>
                            <input type="radio" id="shiptoother" name="shipto" onclick="checkShippingInfo()" required>
                            <label for="shiptoother">Other Address</label>
                            <input type="radio" id="shiptodropship" name="shipto" onclick="checkShippingInfo()" required>
                            <label for="shiptodropship">Dropship</label>
                            <input type="radio" id="shiptocustomerpickup" name="shipto" onclick="checkShippingInfo()" required>
                            <label for="shiptocustomerpickup">Customer Pickup</label>
                        </li>
                        <div class="shippingdcother">
                        <li class="selectdc">
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> 47 (Conyers)</label>
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> TX (Dallas)</label>
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> NJ (Dayton NJ)</label>
                        </li>
                            <input type="text" id="otheraddress" name="otheraddress" placeholder="Other Address">
                        </div>    
                    </div>
                </div>
                </div>
        `
        extraForms.append(mailersDiv);
    }
    if (addedForm === 'Labels') {
        const labelsDiv = document.createElement('div');

        labelsDiv.innerHTML = `
        <div class="labels">
                    <h1>Labels</h1>
                    <div class="labels1">
                        <li>
                            <p>Finished Size?</p>
                            <input type="text" id="labelsfinishedsize" name="labelsfinishedsize" placeholder="Finished Size">
                        </li>

                        <li>
                            <p>Material?</p>
                            <input type="text" id="labelsmaterial" name="labelsmaterial" placeholder="Material">
                        </li>

                        <li>
                            <p>Wind Direction?</p>
                            <input type="text" id="labelswinddirection" name="labelswinddirection" placeholder="Wind Direction">
                        </li>

                        <li>
                            <p>Is your customer open to alternative materials?</p>
                            <input type="radio" id="labelscustomeropenno" name="labelscustomeropen">
                            <label for="labelscustomeropenno">No</label>
                            <input type="radio" id="labelscustomeropenyes" name="labelscustomeropen">
                            <label for="labelscustomeropenyes">Yes</label>
                        </li>
                    </div>

                    <div class="labels1 labelsborder">
                        <li>
                            <p>Estimated annual order quantity in pcs</p>
                            <input type="text" id="labelsestquantity" name="labelsestquantity" placeholder="Estimated Quantity">
                        </li>

                        <li>
                            <p>Quantity breaks in pcs</p>
                            <input type="text" id="labelsbreaks" name="labelsbreaks" placeholder="Quantity Breaks">
                        </li>

                        <li>
                            <p>Case count</p>
                            <input type="text" id="labelscasecount" name="labelscasecount" placeholder="Case Count">
                        </li>
                    </div>

                    <div class="shipping">
                    <h1>Shipping</h1>

                    <div class="shippinginfo">
                        <li>
                            <p>Ship To</p>
                            <input type="radio" id="shiptodc" name="shipto">
                            <label for="shiptodc">DC</label>
                            <input type="radio" id="shiptoother" name="shipto">
                            <label for="shiptoother">Other Address</label>
                            <input type="radio" id="shiptodropship" name="shipto">
                            <label for="shiptodropship">Dropship</label>
                            <input type="radio" id="shiptocustomerpickup" name="shipto">
                            <label for="shiptocustomerpickup">Customer Pickup</label>
                        </li>
                        <div>
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> 47 (Conyers)</label>
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> TX (Dallas)</label>
                            <input type="checkbox" id="shippingdc" name="shippingdc">
                            <label for="shippingdc"> NJ (Dayton NJ)</label>

                            <input type="text" id="otheraddress" name="otheraddress" placeholder="Other Address">
                        </div>    
                    </div>
                </div>

                    <div class="labelscolorsdiv">
                        <li>
                            <p>Colors (if applicable)</p>
                            <input type="text" id="labelscolors" name="labelscolors" placeholder="List Colors">
                        </li>
                        <button>Upload Artwork</button>
                    </div>
                </div>
        `
        extraForms.append(labelsDiv);
    }
};