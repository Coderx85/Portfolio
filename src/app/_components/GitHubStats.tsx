'use client';

import GitHubCalendar from 'react-github-calendar';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function GitHubStats() {
  return (
    <Card className="my-4 border-4 bg-gradient-to-br from-black/35 to-black/50 border-accent overflow-x-auto rounded-xl">
      <CardHeader>
        <CardTitle className="text-md font-bold text-center">
          GitHub Contributions
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4 flex justify-center overflow-x-auto">
        <GitHubCalendar
          username="Coderx85"
          blockSize={7}
          blockMargin={5}
          fontSize={10}
          colorScheme="dark"
          year={new Date().getFullYear()}
        />
      </CardContent>
    </Card>
  );
}
