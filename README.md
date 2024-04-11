# Node dynamic implementation test perf

Given two different loggers implementations, which one is the fastest?

We just warn about something.

Results are below.

| Logger                | Duration |
| --------------------- | -------- |
| LogLevel: **Error**   |          |
| A                     | 1.97ms   |
| B                     | 1.7ms    |
| LogLevel: **Verbose** |          |
| A                     | 4930ms   |
| B                     | 4498ms   |

## Logger A

This one is a classic implementation using a if in each call

## Logger B

This one use method pointers instead of if. They're initialized during logger creation.

For the end user, both implementations present the same API.
