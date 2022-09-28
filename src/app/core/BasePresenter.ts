import {ViewState} from "./ViewState";
import {BehaviorSubject, observeOn, queueScheduler} from "rxjs";

/**
 * Requires and sets basic methods and variables for each presenter class.
 */
export abstract class BasePresenter<State extends ViewState> {

    // Observable object that remembers the last emitted value.
    private readonly state$ = new BehaviorSubject<State>(this.initState())

    // Defines default UI state
    abstract initState(): State

    // Provides observable object as read only (emitting values from a UI is not allowed)
    observableState$ = () => this.state$.pipe(observeOn(queueScheduler))

    // Provides current view state
    protected currentState = () => this.state$.value

    // Updates view state
    protected updateState(update: (currentState: State) => State) {
        this.state$.next(update({...this.currentState()}))
    }
}