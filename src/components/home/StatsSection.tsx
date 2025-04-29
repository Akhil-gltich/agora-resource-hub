
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-2">Resource Hub Statistics</h2>
          <p className="text-muted-foreground">
            Growing collection of academic resources from across the college
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-500 mb-2">1,200+</div>
                <p className="text-sm text-muted-foreground">Total Resources</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-500 mb-2">28</div>
                <p className="text-sm text-muted-foreground">Academic Departments</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-500 mb-2">5,400+</div>
                <p className="text-sm text-muted-foreground">Monthly Downloads</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-500 mb-2">130+</div>
                <p className="text-sm text-muted-foreground">Contributing Faculty</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
