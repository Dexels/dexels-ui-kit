import { IconType, Status } from '../../../types';
import { ReactNode } from 'react';

export interface ConfirmDialog {
    buttonCancelText: ReactNode;
    buttonConfirmText: ReactNode;
    iconType: IconType;
    status: Status;
    text: ReactNode;
}
