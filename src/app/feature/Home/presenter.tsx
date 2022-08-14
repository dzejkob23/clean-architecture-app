import {GetDataUseCase} from "../../../domain/GetDataUseCase";
import {DataRepositoryImpl} from "../../../data/DataRepositoryImpl";

export class Presenter {

    private useCase: GetDataUseCase;

    constructor(
        useCase: GetDataUseCase = new GetDataUseCase(new DataRepositoryImpl()) // FIXME - replace this by DI implementation
    ) {
        this.useCase = useCase
    }

    // TODO - continue in implementation of presenter

}
