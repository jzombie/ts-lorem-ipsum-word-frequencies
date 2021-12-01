"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
class WordCounter extends stream_1.Writable {
    constructor(n) {
        super();
        this._n = n;
        this._wordCounts = {};
        this.setDefaultEncoding('utf-8');
    }
    _write(data, encoding, callback) {
        // Convert buffer to a string then trim off non-alphanumeric characters
        const str = data.toString().replace(/\W/g, ' ');
        // Split words then normalize casing to lower-case
        const words = str
            .split(' ')
            .filter((pred) => pred.trim().length)
            .map((word) => word.toLowerCase());
        for (const word of words) {
            if (this._wordCounts[word]) {
                ++this._wordCounts[word];
            }
            else {
                this._wordCounts[word] = 1;
            }
        }
        callback();
    }
    getFrequencies() {
        const counts = [];
        // Aggregate words by their counts
        for (const word in this._wordCounts) {
            const count = this._wordCounts[word];
            if (!counts[count]) {
                counts[count] = [word];
            }
            else {
                counts[count] = [...counts[count], word];
            }
        }
        const ret = [];
        let i = 0;
        let isComplete = false;
        const reversedKeys = [...counts.keys()].reverse();
        for (const count of reversedKeys) {
            if (isComplete) {
                break;
            }
            const words = counts[count];
            if (words) {
                for (const word of words) {
                    ret.push({ word, count });
                    ++i;
                    if (i === this._n) {
                        isComplete = true;
                        break;
                    }
                }
            }
        }
        return ret;
    }
}
exports.default = WordCounter;
//# sourceMappingURL=WordCounter.js.map