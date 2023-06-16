import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';
import * as mockProject from './api/project.mock-data';


describe('mapper specs', () => { 
        it('should return empty project when it feeds null', () => {
                // Arrange
                const project: apiModel.Project = null;
                
                // Act
                const result: viewModel.Project = mapProjectFromApiToVm(project);
                
                // Assert
                expect(result).toEqual({id: '',
                        name: '',
                        externalId: '',
                        comments: '',
                        isActive: false,
                        employees: [],})
        });

        it('should return empty project when it feeds undefined', () => {
                // Arrange
                const project: apiModel.Project = undefined;
                
                // Act
                const result: viewModel.Project = mapProjectFromApiToVm(project);
                // Assert
                expect(result).toEqual({id: '',
                        name: '',
                        externalId: '',
                        comments: '',
                        isActive: false,
                        employees: [],})
                });

        it('should return empty project when it feeds empty project', () => {
                // Arrange
                const project: apiModel.Project = {id: '',
                name: '',
                externalId: '',
                comments: '',
                isActive: false,
                employees: []};
                
                // Act
                const result: viewModel.Project = mapProjectFromApiToVm(project);
                // Assert
                expect(result).toEqual({id: '',
                        name: '',
                        externalId: '',
                        comments: '',
                        isActive: false,
                        employees: []})
                });

        it('should pass when feeds with a project', () => {
                
                // Arrange
                const project: apiModel.Project = mockProject.mockProject;

                // Act
                const result: viewModel.Project = mapProjectFromApiToVm(project);
                
                // Assert
                expect(result).toEqual(project)
        });
});