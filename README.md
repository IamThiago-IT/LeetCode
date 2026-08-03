# LeetCode Solutions

A collection of LeetCode problem solutions implemented in TypeScript, organized by difficulty level.

## Structure

```
LeetCode/
├── Easy/
│   └── Plus_One/           # LeetCode 66 - Plus One
├── Medium/
│   └── Maximum Number of Fish in a Grid/  # LeetCode 2658
└── 2026/                   # Additional solutions by year
```

## Problems Solved

### Easy
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [66. Plus One](https://leetcode.com/problems/plus-one/) | [TypeScript](Easy/Plus_One/index.ts) | Easy |

### Medium
| Problem | Solution | Difficulty |
|---------|----------|------------|
| [2658. Maximum Number of Fish in a Grid](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/) | [TypeScript](Medium/Maximum%20Number%20of%20Fish%20in%20a%20Grid/index.ts) | Medium |

## Running Solutions

Each solution is a standalone TypeScript function. To run them:

```bash
# Using ts-node
npx ts-node Easy/Plus_One/index.ts

# Or compile first
npx tsc Easy/Plus_One/index.ts && node Easy/Plus_One/index.js
```

## Contributing

Feel free to add more solutions by:
1. Creating a folder under the appropriate difficulty (`Easy/`, `Medium/`, `Hard/`)
2. Adding an `index.ts` with the solution
3. Optionally adding a `README.md` with problem description

## License

MIT