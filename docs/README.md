# LeetCode Solutions

A collection of LeetCode problem solutions implemented in TypeScript and Swift, organized by difficulty level.

## Structure

```
LeetCode/
├── easy/
│   └── plus-one/                          # LeetCode 66 - Plus One
├── medium/
│   └── maximum-number-of-fish-in-a-grid/  # LeetCode 2658
└── hard/
    └── 1406. Stone Game III/              # LeetCode 1406
```

## Problems Solved

### Easy
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [66. Plus One](https://leetcode.com/problems/plus-one/) | [TypeScript](easy/plus-one/index.ts) | Easy |

### Medium
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [2658. Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/) | [TypeScript](medium/maximum-number-of-fish-in-a-grid/index.ts) | Medium |

### Hard
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [1406. Stone Game III](https://leetcode.com/problems/stone-game-iii/) | [Swift](hard/1406.%20Stone%20Game%20III/index.swift) | Hard |

## Running Solutions

Each solution is a standalone function in its respective language. To run them:

```bash
# TypeScript
npx ts-node easy/plus-one/index.ts

# Or compile first
npx tsc easy/plus-one/index.ts && node easy/plus-one/index.js

# Swift
swift hard/1406.\ Stone\ Game\ III/index.swift
```

## Contributing

Feel free to add more solutions by:
1. Creating a folder under the appropriate difficulty (`easy/`, `medium/`, `hard/`)
2. Using kebab-case for problem folders (e.g. `plus-one`)
3. Adding the solution file (`index.ts`, `index.swift`, etc.)
4. Optionally adding a `README.md` or `description.md` with problem description

## License

[MIT](LICENSE)