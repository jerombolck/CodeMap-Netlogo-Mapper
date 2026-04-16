"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class mapper {
    static read_all_lines(file) {
        let text = fs.readFileSync(file, 'utf8');
        return text.split(/\r?\n/g);
    }
    static generate(file) {
        let members = [];
        let line_num = 0;
        let last_indent = 0;

        try {
            mapper
                .read_all_lines(file)
                .forEach(line => {
                    line_num++;

                    if (line.search("^(\\s*);; (.*) ;;") != -1) {
                        line = line.replace(";; ", "").replace(" ;;", "")
                        members.push(`${line}|${line_num}|level1`);
                        last_indent = 0
                    }
                    else if (line.search("^(\\s*);; (.*)") != -1) {
                        line = line.replace(";; ", "")
                        members.push(` ${line}|${line_num}|level2`);
                        last_indent = 2
                    }
                    else if (line.search("^(\\s*)to(-report)* (.*)") != -1) {
                        line = line.replace(/to(-report)* /g, "").replace(/ \[(.*)\]/g, "");

                        if (last_indent == 2)
                            members.push(`  ${line}|${line_num}|function`);
                        else
                            members.push(` ${line}|${line_num}|function`);
                    }
            });
        }
        catch (error) {
        }
        return members;
    }
}
exports.mapper = mapper;