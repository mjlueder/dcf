const projects = [
  {title: "Umbrellabird Conservation in the Choco", species: "Long-wattled umbrellabird", country: "Ecuador"},
  {title: "Northern Tanzania Big Cats Conservation Initiative", species: "African lion, cheetah, leopard", country: "Tanzania"},
  {title: "Expanding and Optimizing Emerging Marine Megafauna Bycatch Reduction Technologies", species: "Hawksbill turtle, leatherback turtle, green turtle, Munk's devil ray, giant oceanic manta ray, Pacific angel shark, scalloped hammerhead shark, and horn shark", country: "Mexico"},
  {title: "Living with Lions Community Conservation", species: "Puma", country: "United States"},
  {title: "Green Enterprises for Agave Restoration", species: "Mexican long-nosed bat", country: "Mexico"}
]

export default function Table() {
  return (
    <>  
      <table> 
        <tr>
          <th>Title</th>
          <th>Species</th>
          <th>Country</th>
        </tr>
        {projects.map((project, i) => (
          <tr key={i}>
            <td>{project.title}</td>
            <td>{project.species}</td>
            <td>{project.country}</td>
          </tr>
        ))}
      </table>
    </>
  )
}