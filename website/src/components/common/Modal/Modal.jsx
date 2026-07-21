
import React from 'react';
import { Modal as HeroModal } from '@heroui/react';

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'md',
    ...props
}) => {
    return (
        <HeroModal
            isOpen={isOpen}
            onOpenChange={(open) => {
                if (!open) {
                    onClose?.();
                }
            }}
        >
            <HeroModal.Backdrop
                variant="opaque"
                {...props}
            >
                <HeroModal.Container
                    placement="center"
                    size={size}
                >
                    <HeroModal.Dialog>
                        {({ close }) => (
                            <>
                                {title && (
                                    <HeroModal.Header className="flex flex-col gap-1 font-bold text-lg text-slate-800">
                                        <HeroModal.Heading>
                                            {title}
                                        </HeroModal.Heading>
                                    </HeroModal.Header>
                                )}

                                <HeroModal.Body className="py-4">
                                    {children}
                                </HeroModal.Body>

                                {footer && (
                                    <HeroModal.Footer className="border-t border-gray-100 pt-3">
                                        {footer}
                                    </HeroModal.Footer>
                                )}
                            </>
                        )}
                    </HeroModal.Dialog>
                </HeroModal.Container>
            </HeroModal.Backdrop>
        </HeroModal>
    );
};

export default Modal;