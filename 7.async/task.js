//Задача 1. Будильник-колыбельная

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		let date = new Date();
		let time = date.toLocaleTimeString().slice(0, -3);
		return time;
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(alarm => {
					if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
						alarm.callback();
						alarm.canCall = false;
					}
				});
			}, 1000);
		}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        });
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}