
import { Card, CardContent } from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, FileCheck, ChartBar, Search, Plus } from "lucide-react";

const HRDashboard = () => {
  return (
    <div className="min-h-screen bg-[#060606]">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="relative mb-8">
          <AnimatedGradient
            colors={["#6E59A5", "#9b87f5", "#D6BCFA"]}
            speed={8}
            blur="medium"
          />
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">HR Dashboard</h1>
            <p className="text-gray-300 max-w-2xl">
              Streamline your recruitment process with AI-powered resume screening
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Applications", value: "1,234", icon: FileCheck, color: "from-purple-500 to-pink-500" },
            { title: "Active Jobs", value: "45", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
            { title: "Candidates Shortlisted", value: "89", icon: Users, color: "from-green-500 to-emerald-500" },
            { title: "Success Rate", value: "92%", icon: ChartBar, color: "from-orange-500 to-yellow-500" },
          ].map((stat, index) => (
            <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${stat.color}">
                      {stat.value}
                    </h3>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StarBorder className="group transition-all duration-300 hover:scale-[1.01]">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Search className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Screen Resumes</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Upload resumes and let our AI analyze them in seconds
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Start Screening
              </Button>
            </div>
          </StarBorder>

          <StarBorder className="group transition-all duration-300 hover:scale-[1.01]">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Plus className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Post New Job</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Create a new job posting and start receiving applications
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Create Job
              </Button>
            </div>
          </StarBorder>
        </div>

        {/* Recent Activity Section */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                "New application received for Senior Developer position",
                "Resume screening completed for Marketing Manager role",
                "Interview scheduled with John Doe",
                "New job posting created for UI/UX Designer",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <p className="text-gray-300">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HRDashboard;
