import { useEffect } from 'react';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    if (metaDescription) metaDescription.setAttribute('content', description);
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogType) ogType.setAttribute('content', 'website');
  }, [title, description]);

  return null;
}
