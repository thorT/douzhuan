import maxios from './wayaxios'

export function getTaskList(start, end) {
    return maxios.get('changgang/demo.php', {'start': start, 'end': end}, false)
}
