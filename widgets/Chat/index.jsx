// styled components
import {Message, Form, Button, DateLabel, FormWrapper} from './style';

// components
import ModalContainer from '@components/ModalContainer';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import {useModal} from '@contexts/modalContext';
import useMeasure from 'react-use-measure';

// assets
import logo from '@assets/logo-dark.svg';
import avatar from '@assets/avatar.webp';

const Chat = ({isSidebarWidget}) => {
    const [ref, {height}] = useMeasure();
    const {open, modal} = useModal();

    return (
        <ModalContainer open={open && modal === 'support'} isSidebarWidget={isSidebarWidget}>
            <div className="card widget_body h-100 g-0">
                <ScrollContainer height={height} bg="widget-bg">
                    <div className="track">
                        <DateLabel>Today</DateLabel>
                        <div className="d-flex flex-column g-24">
                            <div className="d-flex flex-column g-8">
                                <Message>
                                    <div className="content">
                                        <p className="text-header">
                                            Welcome to InCrypto Live Chat. Your inquiry is important to us.
                                        </p>
                                        <span className="timestamp">12:12</span>
                                    </div>
                                </Message>
                                <Message>
                                    <div className="d-flex flex-column g-8">
                                        <div className="container">
                                            <img className="avatar" src={logo} alt="InCrypto Support"/>
                                            <div className="content">
                                                <p className="text-header">
                                                    Choose one of the topics below:
                                                </p>
                                                <span className="timestamp">12:13</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap g-8">
                                            <Button>Buy Crypto</Button>
                                            <Button>NFT</Button>
                                            <Button>Deposit</Button>
                                            <Button>Withdraw</Button>
                                            <Button>Exchange</Button>
                                            <Button>AML Check</Button>
                                            <Button>Stacking</Button>
                                        </div>
                                    </div>
                                </Message>
                            </div>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={avatar} alt="User"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Deposit
                                        </p>
                                        <span className="timestamp">12:13</span>
                                    </div>
                                </div>
                            </Message>
                            <div className="d-flex flex-column g-8">
                                <Message>
                                    <div className="content">
                                        <p className="text-header">
                                            1. Choose the cryptocurrency you'd like to deposit so the appropriate address
                                            will be generated.
                                        </p>
                                        <p className="text-header">
                                            2. Copy the address or scan the QR code (while using external wallet app).
                                        </p>
                                        <p className="text-header">
                                            3. Wait for your crypto to arrive. This can normally take between 10-20 minutes
                                            to arrive.
                                        </p>
                                        <p className="text-header">
                                            4. Done!
                                        </p>
                                        <span className="timestamp">12:13</span>
                                    </div>
                                </Message>
                                <Message>
                                    <div className="d-flex flex-column g-8">
                                        <div className="container">
                                            <img className="avatar" src={logo} alt="InCrypto Support"/>
                                            <div className="content">
                                                <p className="text-header">
                                                    Was issue resolved?
                                                </p>
                                                <span className="timestamp">12:14</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-wrap g-8">
                                            <Button>Resolved</Button>
                                            <Button>Unresolved</Button>
                                        </div>
                                    </div>
                                </Message>
                            </div>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={avatar} alt="User"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Resolved
                                        </p>
                                        <span className="timestamp">12:15</span>
                                    </div>
                                </div>
                            </Message>
                            <Message>
                                <div className="container">
                                    <img className="avatar" src={logo} alt="InCrypto Support"/>
                                    <div className="content">
                                        <p className="text-header">
                                            Dialogue is over.
                                        </p>
                                        <span className="timestamp">12:14</span>
                                    </div>
                                </div>
                            </Message>
                        </div>
                    </div>
                </ScrollContainer>
                <FormWrapper ref={ref}>
                    <Form className="field-input">
                        <input className="flex-1" placeholder="Message"/>
                        <button className="btn btn--pill">Send</button>
                    </Form>
                </FormWrapper>
            </div>
        </ModalContainer>
    )
}

export default Chat