export default function Space({item}) {
    return (
        <div>
            {item.mission_name} {item.launch_year} {item.mission_patch_small}
        </div>
    )
}