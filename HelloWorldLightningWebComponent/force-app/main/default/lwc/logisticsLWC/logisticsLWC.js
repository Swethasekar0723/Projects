import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import PHONE_FIELD from '@salesforce/schema/Customer__c.Phone__c';
import EMAIL_FIELD from '@salesforce/schema/Customer__c.Email__c';
import STREET_FIELD from '@salesforce/schema/Customer__c.Street__c';
import CITY_FIELD from '@salesforce/schema/Customer__c.City__c';
import PRODUCT_NAME_FIELD from '@salesforce/schema/Customer__c.Product_Name__c';
export default class LightningRecordFormCreateExampleLWC extends LightningElement 
    @api objectApiName;
    fields = [NAME_FIELD, PHONE_FIELD, EMAIL_FIELD,STREET_FIELD,CITY_FIELD,PRODUCT_NAME_FIELD];
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}
