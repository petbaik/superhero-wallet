import { TX_TYPE } from '@aeternity/aepp-sdk/es/tx/builder/schema';
import { popupProps, txParams } from '../../../src/popup/utils/config';

const popups = ['connectConfirm', 'sign', 'messageSign'];

const txTypes = [TX_TYPE.spend, TX_TYPE.contractCall, TX_TYPE.contractCreate];

describe('Tests cases for AEX-2 popups', () => {
  beforeEach(() => {
    cy.login();
  });

  popups.forEach(popup => {
    it(`Open ${popup} popup`, () => {
      cy.openAex2Popup(popup);
    });
  });

  it('Sign Message popup display correct data', () => {
    const props = popupProps.messageSign;
    const host = `${props.host} (${props.name})`;
    cy.openAex2Popup('messageSign')
      .get('[data-cy=host]')
      .should('be.visible')
      .should('contain', host)
      .get('[data-cy=message]')
      .should('be.visible')
      .should('contain', props.action.params.message);
  });

  it('Connect Popup display correct data', () => {
    const props = popupProps.connectConfirm;
    const host = `${props.host} (${props.name})`;
    cy.openAex2Popup('connectConfirm')
      .get('[data-cy=aepp]')
      .should('be.visible')
      .should('contain', host)
      .get('[data-cy=host]')
      .should('be.visible')
      .should('contain', props.host)
      .get('[data-cy=name]')
      .should('be.visible')
      .should('contain', props.name);
  });

  popups.forEach(popup => {
    it(`${popup} popup send deny action`, () => {
      cy.openAex2Popup(popup)
        .get('[data-cy=deny]')
        .click()
        .window()
        .then(win => {
          expect(win.reject).to.equal('send');
        });
    });
  });

  popups.forEach(popup => {
    it(`${popup} popup send accept action`, () => {
      cy.openAex2Popup(popup)
        .get('[data-cy=accept]')
        .click()
        .window()
        .then(win => {
          expect(win.resolve).to.equal('send');
        });
    });
  });

  txTypes.forEach(txType => {
    it(`Sign Popup display correct ${txType} data`, () => {
      const tx = txParams[txType];
      const amount = tx.amount / 10 ** 18;
      const fee = tx.fee / 10 ** 18;
      let receiver;
      if (txType === 'spendTx') {
        receiver = tx.recipientId;
      } else if (txType === 'contractCallTx') {
        receiver = tx.contractId;
      } else {
        receiver = 'New Contract';
      }
      cy.openAex2Popup('sign', txType)
        .get('[data-cy=tx-type]')
        .should('be.visible')
        .should('contain', txType)
        .get('[data-cy=input-number]')
        .should('have.value', amount.toFixed(1))
        .get('[data-cy=amount-currency]')
        .should('be.visible');

      if (txType === 'spendTx' || txType === 'contractCallTx') {
        cy.get('[data-cy=address-receiver]')
          .should('be.visible')
          .invoke('attr', 'title')
          .should('contain', receiver);
      } else {
        cy.get('[data-cy=receiver]')
          .should('be.visible')
          .should('contain', receiver);
      }

      cy.get('[data-cy=fee]')
        .should('be.visible')
        .should('contain', fee.toFixed(2))
        .get('[data-cy=total]')
        .should('be.visible')
        .should('contain', parseFloat(amount + fee).toFixed(7));
    });
  });
});
