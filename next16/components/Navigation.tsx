'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const navLinks = [
  { label: '홈', href: '/' },
  { label: '데이터', href: '/data' },
  { label: '카운터', href: '/counter' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <Card className="mb-4">
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">Next16</span>
        <div className="flex gap-4">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <Button variant={pathname === link.href ? 'default' : 'ghost'}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
