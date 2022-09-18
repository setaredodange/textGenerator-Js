const  dummyText = [
    'Mellat Insurance Company obtained the license to issue Life Insurance bonds from the Central Insurance Company.',
    'In this plan the insured can buy the life insurance bonds while benefiting from a captive capital for ten years the equivalent of the final capital of the bonds at the end of the contract receive the amount of capital invested in the bonds The calculations are based on life insurance policies and savings (Endowment) plans',
    'This insurance policy has been licensed for the first time in the insurance industry and has unique features including the ability to transfer it to the insured (second insured)',
    'These securities are issued with name but the owner of the bonds can transfer the bonds to another person at agreed price and benefiting from the life insurance coverage during the time and he can receive the capital amount inserted in the bonds at the end of the maturity using the mortgage capital',
    'Each person can buy up to 200 bonds with a total value of two billion IRR in accordance with the insurance regulations The value of each Bond is 10 million IRR and the premiums of 2.5 million IRRisconsidered at the beginning of the contract',
    'Transferring of any of the securities to the third parties after the approval of Mellat insurance and inserting on the back of the sheet is allowed.',
    ' The premium for each of these bonds is two million and five hundred thousand IRR which are paid by the buyer upon issue.',
    'Each sheet of bonds is redeemed at a rate of 13% per annum (surplus to premium).',
    'The holder of the bonds has a line of credit (equivalent to the redemption value) withMellat insurance'

]

// console.log(dummyText.length);

const amountInputElem = document.querySelector('#amount')
const generateBtnElem = document.querySelector('button')
const resultElem = document.querySelector('#result')

generateBtnElem.addEventListener('click', function(e){
    e.preventDefault()

    // console.log('click shod');
    let amountElemValue = amountInputElem.value
    let randomTextIndex = Math.floor(Math.random()* dummyText.length)
    // console.log(randomTextIndex);

    if(amountElemValue<0 || amountElemValue >9 || amountElemValue === '' ||isNaN(amountElemValue) || amountElemValue === '0'){
        resultElem.innerHTML = dummyText[randomTextIndex]

    }else{
        let sliceArray = dummyText.slice(0, amountElemValue)
        // console.log(sliceArray);

        let finalTextArray = sliceArray.map(function(item){
            return '<p>' + item + '</p>'
        })
        // console.log(finalTextArray)
        resultElem.innerHTML = finalTextArray
    }
})