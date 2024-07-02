// styling
import styles from './style.module.scss';

// components
import WidgetHeader from '@components/WidgetHeader';
import StyledSelect from '@ui/StyledSelect';
import WalletItem from '@components/WalletItem';
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useState} from 'react';
import useMeasure from 'react-use-measure';

// utils
import {memo} from 'react';

// constants
import {CRYPTO_CURRENCIES, CURRENCIES} from '@constants/currencies';

// assets
import wallet from '@assets/wallet.webp';
import bg from '@assets/mountains.svg';
import iconLight from '@assets/icons/icon-wallet-light.svg';
import iconDark from '@assets/icons/icon-wallet-dark.svg';

const WalletOverview = ({withTitle = true}) => {
    const [ref, {height}] = useMeasure();
    const [totalCurrency, setTotalCurrency] = useState(CURRENCIES[0]);
    const totalBTC = 0.23415600;

    const data = [
        {key: 'btc', balance: 0.1832},
        {key: 'busd', balance: 125.14},
        {key: 'eth', balance: 0.587},
        {key: 'xrp', balance: 12.356},
        {key: 'sol', balance: 0.999},
        {key: 'doge', balance: 7.504},
        {key: 'orchid', balance: 12.102},
        {key: 'usdt', balance: 0},
        {key: 'ada', balance: 0},
        {key: 'xph', balance: 0},
        {key: 'matic', balance: 0},
        {key: 'link', balance: 0},
        {key: 'okb', balance: 0},
    ];

    const exchangeTotal = () => {
        const currency = CRYPTO_CURRENCIES.find(c => c.exchange[totalCurrency.value]);
        const exchange = currency.exchange[totalCurrency.value];
        return (totalBTC * exchange).toFixed(2);
    }

    return (
        <Spring className="widget">
            <div className="d-flex flex-column g-16 pb-16" ref={ref}>
                {
                    withTitle &&
                    <WidgetHeader className="pb-0" title="Wallet Cryptocurrency" iconLight={iconLight} iconDark={iconDark}/>
                }
                <div className={`${styles.total} card card--dark d-flex`}>
                    <img className="total_bg cover" src={bg} alt="media"/>
                    <div className={styles.total_main}>
                        <span className="text-dark text-12 text-600 lh-1">Total Assets</span>
                        <div className="d-flex align-items-end g-8">
                            <span className="text-large text-white">{exchangeTotal()}</span>
                            <StyledSelect value={totalCurrency}
                                          onChange={setTotalCurrency}
                                          options={CURRENCIES}
                                          variant="minimal"/>
                        </div>
                        <span className="text-600 text-dark lh-1">
                        <span className="text-14 text-white lh-1">{totalBTC}</span> BTC
                    </span>
                    </div>
                    <LazyImage className={styles.total_media} effect="opacity" src={wallet} alt="Total Assets"/>
                </div>
            </div>
            <ScrollContainer height={height - 1} bg="widget-bg">
                <div className="track card">
                    {
                        data.map((item, i) => {
                            const currency = CRYPTO_CURRENCIES.find(c => c.value === item.key);

                            return (
                                <WalletItem key={i} currency={currency} item={item} i={i}/>
                            )
                        })
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default memo(WalletOverview);