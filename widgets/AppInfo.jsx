// components
import ModalContainer from '@components/ModalContainer';

// hooks
import {useModal} from '@contexts/modalContext';

const AppInfo = ({isSidebarWidget}) => {
    const {open, modal} = useModal();

    return (
        <ModalContainer open={open && modal === 'info'} isSidebarWidget={isSidebarWidget}>
            <div className="modal card widget_body">
                <div className="d-flex flex-column g-8">
                    <h2>Help</h2>
                    <div className="d-flex flex-column g-8">
                        <button className="modal-element card bordered bordered--hover">
                            Help Center <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Terms of Service <i className="icon icon-chevron-right"/>
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-column g-8">
                    <h2>Socials</h2>
                    <div className="d-flex flex-column g-8">
                        <button className="modal-element card bordered bordered--hover">
                            Follow our Twitter <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Follow our Instagram <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Follow our TikTok <i className="icon icon-chevron-right"/>
                        </button>
                        <button className="modal-element card bordered bordered--hover">
                            Follow our Facebook <i className="icon icon-chevron-right"/>
                        </button>
                    </div>
                </div>
            </div>
        </ModalContainer>
    )
}

export default AppInfo