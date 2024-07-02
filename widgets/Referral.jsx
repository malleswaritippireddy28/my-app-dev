// components
import Voucher from '@components/Voucher';
import WidgetHeader from '@components/WidgetHeader';
import CopyField from '@components/CopyField';
import Spring from '@components/Spring';

// assets
import iconLight from '@assets/icons/icon-invite-light.svg';
import iconDark from '@assets/icons/icon-invite-dark.svg';

const Referral = () => {
    return (
        <Spring className="widget">
            <WidgetHeader title="Referral Program" iconLight={iconLight} iconDark={iconDark}/>
            <div className="widget_body card h-2">
                <h2>Referral Program</h2>
                <Voucher style={{marginTop: '-8px'}} />
                <div className="d-flex flex-column g-8">
                    <h2>Referral Details</h2>
                    <p className="text-14 text-overflow">Copy the referral code and send it to the friend</p>
                    <CopyField label="Referral ID" value="bc2w-qkj7-834-jj0h-458h-dwawp-q034" />
                    <CopyField label="Referral Link" value="https://crypto-merkulove/design-0010" />
                </div>
            </div>
        </Spring>
    )
}

export default Referral