// components
import WidgetHeader from '@components/WidgetHeader';
import QRField from '@components/QRField';
import LabelField from '@components/LabelField';
import OperationTotal from '@components/OperationTotal';
import StyledSelect from '@ui/StyledSelect';
import Spring from '@components/Spring';
import FooterText from '@components/FooterText';

// hooks
import {useState} from 'react';
import {useModal} from '@contexts/modalContext';

// constants
import {CRYPTO_CURRENCIES} from '@constants/currencies';

// assets
import iconLight from '@assets/icons/icon-aml-light.svg';
import iconDark from '@assets/icons/icon-aml-dark.svg';

const AMLCheck = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(CRYPTO_CURRENCIES[0]);
    const {handleOpen} = useModal();

    return (
        <Spring className="widget">
            <WidgetHeader title="AML Check" iconLight={iconLight} iconDark={iconDark}/>
            <div className="widget_body card">
                <div className="d-flex flex-column g-16">
                    <LabelField id="aml-currency"
                                label="Currency to check"
                                customInput={
                                    <StyledSelect id="currency-aml"
                                                  options={CRYPTO_CURRENCIES}
                                                  value={selectedCurrency}
                                                  onChange={setSelectedCurrency}/>
                                }/>
                    <LabelField id="aml-address"
                                label="Address"
                                customInput={<QRField id="aml-address"/>}/>
                </div>
                <div className="d-flex flex-column g-8">
                    <OperationTotal currency={selectedCurrency.label} fee={4.8}/>
                    <FooterText/>
                </div>
                <button className="btn" onClick={() => handleOpen('payment')}>Check</button>
            </div>
        </Spring>
    )
}

export default AMLCheck