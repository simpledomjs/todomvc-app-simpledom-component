import {el, ConnectedComponent} from 'simpledom-component';

import {TodoCounter} from './TodoCounter';
import {ClearAllButton} from './ClearAllButton';

import {UPDATE_TODO_LIST} from '../services/todo';

export class Footer extends ConnectedComponent {
	eventsToSubscribe() {
		return [UPDATE_TODO_LIST];
	}

	render() {
		if (!this.state.todos.length) {
			return undefined;
		}
		return (
			<footer class="footer">
				<TodoCounter />
				<ClearAllButton />
			</footer>
		);
	}

}
