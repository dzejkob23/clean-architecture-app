import {ViewState} from "./ViewState";
import {BehaviorSubject} from "rxjs";
import {HomeState} from "../feature/Home/homePresenter";

/**
 * Requires and sets basic methods and variables for each presenter class.
 */
export abstract class BasePresenter<State extends ViewState> {

    // Observable object that remembers the last emitted value.
    readonly state$ = new BehaviorSubject<HomeState>(this.initState())

    // Define default UI state
    abstract initState(): HomeState

    // Provide current view state
    protected currentState = () => this.state$.value

    // Update view state
    protected updateState(update: (currentState: HomeState) => HomeState) {
        this.state$.next(update(this.currentState()))
    }
}