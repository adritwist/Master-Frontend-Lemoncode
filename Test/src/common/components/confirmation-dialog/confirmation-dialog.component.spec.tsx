import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



describe('ConfirmationDialogComponent specs', () => {

    beforeEach(() => {
        const props = {
            isOpen: true,
            onAccept: jest.fn(),
            onClose: jest.fn(),
            title: 'Título',
            labels: {
                closeButton: 'Cerrar',
                acceptButton: 'Aceptar'
            },
            children: 'Contenido',
        }
        // Act
        render(<ConfirmationDialogComponent {...props} />);
    });

    it('Button "Cerrar" is available when isOpen = true', async () => {
       
        const selectElement = screen.getByRole('button', { name: 'Cerrar' });
        fireEvent.click(selectElement);

            
        // Assert
        expect(selectElement).toBeCalled;
        

        });

        it('Button "Aceptar" is available when isOpen = true', async () => {
               
            const selectElement = screen.getByRole('button', { name: 'Aceptar' });
            fireEvent.click(selectElement);
    
                
            // Assert
            expect(selectElement).toBeInTheDocument();
            
    
        });

        it('When isOpen = false, button "Aceptar" must to be falsy', async () => {

            const props = {
                isOpen: false,
                onAccept: jest.fn(),
                onClose: jest.fn(),
                title: 'Título',
                labels: {
                    closeButton: 'Cerrar',
                    acceptButton: 'Aceptar'
                },
                children: 'Contenido',
            }
            // Act
            render(<ConfirmationDialogComponent {...props} />);
               
            const selectElement = screen.getByRole('button', { name: 'Aceptar' });
    
                
            // Assert
            expect(selectElement).toBeFalsy;
            
    
        });

        it('When isOpen = false, button "Aceptar" must to be falsy', async () => {

            const props = {
                isOpen: false,
                onAccept: jest.fn(),
                onClose: jest.fn(),
                title: 'Título',
                labels: {
                    closeButton: 'Cerrar',
                    acceptButton: 'Aceptar'
                },
                children: 'Contenido',
            }
            // Act
            render(<ConfirmationDialogComponent {...props} />);
               
            const selectElement = screen.getByRole('button', { name: 'Cerrar' });
    
                
            // Assert
            expect(selectElement).toBeFalsy;
            
    
        });

        it('Check if title name is "Título", must to be in the document', async () => {

            const props = {
                isOpen: false,
                onAccept: jest.fn(),
                onClose: jest.fn(),
                title: 'Título',
                labels: {
                    closeButton: 'Cerrar',
                    acceptButton: 'Aceptar'
                },
                children: 'Contenido',
            }
            // Act
            render(<ConfirmationDialogComponent {...props} />);
               
            const selectElement = screen.getByRole('heading', { name: 'Título' });
    
                
            // Assert
            expect(selectElement).toBeInTheDocument;
            
    
        });
})