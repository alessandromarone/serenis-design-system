Wavy edge in white or violet, laid over the top/bottom of a photo to soften the crop and draw attention to a detail.

```jsx
<div style={{ position: 'relative' }}>
  <img src="photo.jpg" style={{ width: '100%' }} />
  <Wave color="white" style={{ position: 'absolute', bottom: 0 }} />
</div>
```

- Only `white` or `violet` on photos (`lavender` for tinted grounds).
- This is an approximation of the brand shape; swap in the official vector when supplied.
