# NetLogo Mapper for CodeMap
This is a mapper for NetLogo code to be used with the [CodeMap VSCode extension](https://github.com/oleg-shilo/codemap.vscode).

## Usage
The mapper recognises procedures as well as 2 types of 'headers' in comments:

```
;; This is a level 1 header ;;

to this-procedure-will-appear-under-the-level1-header
end

;; This is a level 2 header

to this-procedure-will-appear-under-the-level2-header
end
```

<img width="477" height="139" alt="image" src="https://github.com/user-attachments/assets/a1989851-3ca6-4b62-8bb8-a95480337851" />

## Installation
1. Install the CodeMap extension by Oleg Shilo in VSCode.
2. Clone this repository.
3. Include `mapper_netlogo.js` in your VSCode settings:
    - `"codemap.nlogox": "path/to/mapper_netlogo.js"`
    - Change .nlogox to yout netlogo file extension
4. [optional] change the regex in `mapper_netlogo.js` to match your preferred code structure
