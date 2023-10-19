const projects = [
  {title: "Umbrellabird Conservation in the Choco", species: "Long-wattled umbrellabird", country: "Ecuador"},
  {title: "Northern Tanzania Big Cats Conservation Initiative", species: "African lion, cheetah, leopard", country: "Tanzania"},
  {title: "Expanding and Optimizing Emerging Marine Megafauna Bycatch Reduction Technologies", species: "Hawksbill turtle, leatherback turtle, green turtle, Munk's devil ray, giant oceanic manta ray, Pacific angel shark, scalloped hammerhead shark, and horn shark", country: "Mexico"},
  {title: "Living with Lions Community Conservation", species: "Puma", country: "United States"},
  {title: "Green Enterprises for Agave Restoration", species: "Mexican long-nosed bat", country: "Mexico"}
]

export default function Table() {
  return (
    <div className="p-4">  
      <p className="p-4 text-center">DCF Funded Projects</p>
      <table className="border-separate border-spacing-2 border border border-slate-500"> 
        <tr>
          <th className="p-4 border border-slate-600">Country</th>
          <th className="p-4 border border-slate-600">Title</th>
          <th className="p-4 border border-slate-600">Species</th>
        </tr>
        {projects.map((project, i) => (
          <tr key={i}>
            <td className="p-4 border border-slate-700">{project.country}</td>
            <td className="p-4 border border-slate-700">{project.title}</td>
            <td className="p-4 border border-slate-700">{project.species}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}