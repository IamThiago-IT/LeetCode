# LeetCode Solutions

A collection of LeetCode problem solutions implemented in TypeScript, organized by difficulty level.

## Structure

```
LeetCode/
├── easy/
│   └── plus-one/                       # LeetCode 66 - Plus One
└── medium/
    └── maximum-number-of-fish-in-a-grid/  # LeetCode 2658
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

## Running Solutions

Each solution is a standalone TypeScript function. To run them:

```bash
# Using ts-node
npx ts-node easy/plus-one/index.ts

# Or compile first
npx tsc easy/plus-one/index.ts && node easy/plus-one/index.js
```

## Contributing

Feel free to add more solutions by:
1. Creating a folder under the appropriate difficulty (`easy/`, `medium/`, `hard/`)
2. Using kebab-case for problem folders (e.g. `plus-one`)
3. Adding an `index.ts` with the solution
4. Optionally adding a `README.md` with problem description

## License

MIT