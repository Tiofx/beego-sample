package util

type PageSelectorInfo struct {
	Max_page int

	Count        int
	Current_page int

	Page_number   int
	Record_number int
	Offset        int
}

func (page *PageSelectorInfo) Configurate(max_page, count, current_page int) {
	page.Max_page = max_page
	page.Count = count
	page.Current_page = current_page

	page.Page_number = func() int {
		if count <= max_page {
			return count

		} else {
			return max_page
		}
	}()
	remaining := count % page.Page_number
	record_per_page := int(count / page.Page_number)

	page.Record_number = record_per_page + func() int {
		if current_page <= remaining {
			return 1

		} else {
			return 0
		}
	}()
	page.Offset = (page.Current_page-1)*record_per_page + func() int {
		if current_page-1 < remaining {
			return current_page - 1

		} else {
			return remaining
		}
	}()
}
