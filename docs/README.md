# LeetCode Solutions

A collection of LeetCode problem solutions implemented in TypeScript and Swift, organized by difficulty level.

## Structure

```
LeetCode/
├── easy/
│   ├── plus-one/                          # LeetCode 66 - Plus One
│   └── 3731. Find Missing Elements/       # LeetCode 3731
├── medium/
│   ├── maximum-number-of-fish-in-a-grid/  # LeetCode 2658
│   └── 3310. Remove Methods From Project/ # LeetCode 3310
└── hard/
    └── 1406. Stone Game III/              # LeetCode 1406
```

## Problems Solved

### Easy
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [66. Plus One](https://leetcode.com/problems/plus-one/) | [TypeScript](easy/plus-one/index.ts) | Easy |
| [3731. Find Missing Elements](https://leetcode.com/problems/find-missing-elements/) | [Swift](easy/3731.%20Find%20Missing%20Elements/main.swift) (em andamento) | Easy |

### Medium
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [2658. Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/) | [TypeScript](medium/maximum-number-of-fish-in-a-grid/index.ts) | Medium |
| [3310. Remove Methods From Project](https://leetcode.com/problems/remove-methods-from-project/) | [Swift](medium/3310.%20Remove%20Methods%20From%20Project/main.swift) (em andamento) | Medium |

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
swift "medium/3310. Remove Methods From Project/main.swift"
swift "easy/3731. Find Missing Elements/main.swift"
```

## Contributing

Feel free to add more solutions by:
1. Creating a folder under the appropriate difficulty (`easy/`, `medium/`, `hard/`)
2. Using kebab-case for problem folders (e.g. `plus-one`)
3. Adding the solution file (`index.ts`, `index.swift`, etc.)
4. Optionally adding a `README.md` or `description.md` with problem description

## License

[MIT](LICENSE)