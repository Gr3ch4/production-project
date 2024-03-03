import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                 {/* eslint-disable-next-line max-len */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cupiditate quidem exercitationem quia error tempora inventore. Nam velit illo provident culpa impedit minus ullam atque magnam asperiores quam. Asperiores, recusandae.
            </Modal>
        </div>
    );
};
