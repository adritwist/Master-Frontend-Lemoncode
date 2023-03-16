import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup, Lookup } from 'common/models';

describe('useLogin specs', () => {
    it('Checking isOpen by default is false', () => {
        // Arrange
        

        // Act
        const { result } = renderHook(() => useConfirmationDialog());

        // Assert
        expect(result.current.isOpen).toBeFalsy;
    })

    it('Checking changing the value when isOpen = true', () => {
        // Arrange

        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        result.current.isOpen = true;
        
        // Assert
        expect(result.current.isOpen).toBe(true);
    })

    it('Checking if itemToDelete is an empty Lookup by default', () => {
        // Arrange
        const item = createEmptyLookup();

        // Act
        const { result } = renderHook(() => useConfirmationDialog());
        
        // Assert
        expect(result.current.itemToDelete).toEqual(item);
    })
});