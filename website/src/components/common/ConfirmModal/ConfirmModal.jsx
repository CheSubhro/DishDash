
import React from 'react';
import { Modal as HeroModal, Button } from '@heroui/react';

const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'Are you sure?',
    children,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    loading = false,
}) => {
    return (
        <HeroModal>
            <HeroModal.Backdrop
                isOpen={isOpen}
                onOpenChange={(open) => {
                    if (!open) {
                        onClose?.();
                    }
                }}
                isDismissable={false}
                variant="opaque"
            >
                <HeroModal.Container
                    size="sm"
                    placement="center"
                >
                    <HeroModal.Dialog>
                        {({ close }) => (
                            <>
                                {/* Modal Header */}
                                <HeroModal.Header className="flex flex-col gap-1">
                                    <HeroModal.Heading className="font-bold text-lg text-red-600">
                                        ⚠️ {title}
                                    </HeroModal.Heading>
                                </HeroModal.Header>

                                {/* Modal Body */}
                                <HeroModal.Body className="py-2">
                                    <p className="text-gray-600 text-sm">
                                        {children ||
                                            'Do you really want to perform this action? This process cannot be undone.'}
                                    </p>
                                </HeroModal.Body>

                                {/* Modal Footer */}
                                <HeroModal.Footer className="flex justify-end gap-2 pt-4">
                                    <Button
                                        variant="tertiary"
                                        size="sm"
                                        onPress={() => {
                                            close();
                                            onClose?.();
                                        }}
                                        isDisabled={loading}
                                    >
                                        {cancelText}
                                    </Button>

                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onPress={onConfirm}
                                        isDisabled={loading}
                                    >
                                        {loading ? 'Processing...' : confirmText}
                                    </Button>
                                </HeroModal.Footer>
                            </>
                        )}
                    </HeroModal.Dialog>
                </HeroModal.Container>
            </HeroModal.Backdrop>
        </HeroModal>
    );
};

export default ConfirmModal;