import {DataRepository} from "../domain/DataRepository";

class DataRepositoryImpl implements DataRepository {

    getData(): number {
        return 4
    }
}

export {DataRepositoryImpl}
