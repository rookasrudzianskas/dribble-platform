import Image from 'next/image'

export default function Home() {
  return (
    <section className="flexStart flex-col paddings mb-16">
      {/*<Categories />*/}

      {/*<section className="projects-grid">*/}
      {/*  {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (*/}
      {/*    <ProjectCard*/}
      {/*      key={`${node?.id}`}*/}
      {/*      id={node?.id}*/}
      {/*      image={node?.image}*/}
      {/*      title={node?.title}*/}
      {/*      name={node?.createdBy.name}*/}
      {/*      avatarUrl={node?.createdBy.avatarUrl}*/}
      {/*      userId={node?.createdBy.id}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*</section>*/}

      {/*<LoadMore*/}
      {/*  startCursor={data?.projectSearch?.pageInfo?.startCursor}*/}
      {/*  endCursor={data?.projectSearch?.pageInfo?.endCursor}*/}
      {/*  hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage}*/}
      {/*  hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}*/}
      {/*/>*/}
    </section>
  )
}
